'use strict';

const readline = require('readline');
const fs = require('fs');
const nPath = require('path');

function readFeatureTestLines(output) {
  return readline.createInterface({
    input: fs.createReadStream(nPath.join(process.cwd(), 'browser/features.js')),
    historySize: 0
  });
}

function lineParser() {
  let currObj;
  return (line) => {
    let m = /^\s+'([^']+)':\s+(.)/.exec(line);

    if(!m) {
      const res = currObj ? { closing: true, object: currObj } : null;
      currObj = null;
      return res;
    }

    const name = m[1];

    if(m[2] === '{') {
      currObj = name;
      return { object: name };
    }

    if(!currObj) {
      return { object: name };
    }

    return { object: currObj, method: name };
  };
}


function writeFeatures(features, outFile) {
  const stream = fs.createWriteStream(outFile);
  const liner = readFeatureTestLines();
  const parseLine = lineParser();

  const methods = new Set();
  const objects = features.reduce((set, feature) => {
    const parts = feature.split('.');
    set.add(parts[0]);
    if(parts[1]) { methods.add(feature); }
    return set;
  }, new Set());

  liner.on('line', (line) => {
    const res = parseLine(line);

    if(
      (res &&
      (
        objects.has(res.object)
        && (
          (res.method && methods.has(`${res.object}.${res.method}`)
          || !res.method)
        )
      ))
      || !res
    ) {
      if(!/^\s*$/.test(line)) { stream.write(`${line}\n`); }
    }
  });
}

function readFeatures() {
  return new Promise((resolve) => {
    const objects = new Set();
    const methods = new Map();

    const liner = readFeatureTestLines();
    const parseLine = lineParser();

    liner.on('line', (line) => {
      const res = parseLine(line);

      if(!res || res.objectClosed || res.object === res.method) { return; }

      if(res.method) {
        const objList = methods.get(res.method) || [];
        objList.push(res.object);
        methods.set(res.method, objList);
      } else if(res.object) {
        objects.add(res.object);
      }
    });

    liner.on('close', () => resolve({objects: objects, methods: methods}));
  });

}

module.exports.write = writeFeatures;
module.exports.read = readFeatures;