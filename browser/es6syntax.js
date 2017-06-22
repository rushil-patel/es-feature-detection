/* eslint-disable no-template-curly-in-string */

import testRunner from './testRunner';

const tests = {
  arrowFunction: [
    'var a=()=>3; if(a()!==3) throw 0',
    `
      function a() {this.b=1; this.c=function(arr) { return arr.map((n) => this.b + n) }}
      if((new a()).c([1])[0]!==2) throw 0
    `
  ],
  blockScope: '{ var a=1 }',
  classes: [
    `
      class A { constructor() { this._b=1; } get b() {return this._b} set b(c) {this_.b=c} }
      var a = new A(); if(a.b !== 1) throw 0; A.b=2; if(A.b !== 2) throw 1;
    `,
    'class A { static a() {} } if(typeof A.a !== "function") throw 0;',
    'class A {}; class B extends A {constructor() {super()}}',
    'class A extends Array {} var a=new A(); a.push(1,2,3); if(a.length !== 3) throw 0;'
  ],
  constants: {
    script: 'const a=1; a=2',
    onerror(ex) { return ex.name === 'TypeError' || ex.message.indexOf('const') > -1; }
  },
  customStrinInterpolation: 'function a(b, c) {return b[0]+c} if(a`d${1}` !== "d1") throw 0',
  defaultParam: 'function a(b=1) {}',
  destructuring: [
    'var [a,b,u]=[1,2], {c,d:e,e:{f:g}}={c:1,d:2, e:{f:3}}',
    'function a([b,c]){} function d({b,c}){}'
  ],
  desctructDefaultParam: 'var {a="b"}={}; function c({d="e"}){}',
  enhancedProperties: 'var a=1, b={a, ["b"+1]:1, b(){}}',
  extendedLiterals: [
    '(0b10===2)',
    '(0o10===8)',
    'var a="\\u{20BB7}", \\u{20BB7}, b=/./u.unicode'
  ],
  forOf: 'for(var a of [1,2]) {}',
  functionName: 'if({a(){}}.a.name !== "a") throw 0',
  generators: 'function *a(){ yield; }',
  lets: [
    {
      script: 'a=2; let a',
      onerror(ex) { return ex.name === 'ReferenceError'; }
    },
    `
      let a=[], i=0;
      for(let i=1;i<=3;i++){ a.push(function(){return i}); }
      if(a[0]()+a[1]()+a[2]()!==6) throw 0;
    `
  ],
  modules: 'export var a=1; import {c} from "b"',
  restParam: 'function a(...b) { return b.length } if(a(1,2,3)!==3) throw 0',
  stickyRegExp: 'var a=/./y.sticky',
  spread: `
    var a=[1,2], b=[3,...a];
    (function c(d,e,f){})(...b);
  `,
  stringTemplate: 'var a=1; if(`a is ${a+1}`!== "a is 2") throw 0',
  symbol: [
    {
      script: 'var a=Symbol("a"); a +""',
      onerror(ex) { return ex.name === 'TypeError'; }
    },
    'var a = Symbol.for("b.c");Symbol.keyFor(a) === "b.c"'
  ]
};

export default function es6syntax(ignore = []) {
  return testRunner(tests, ignore);
}
