"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var es2015_1 = __importDefault(require("./es2015"));
var es2016_1 = __importDefault(require("./es2016"));
var es2017_1 = __importDefault(require("./es2017"));
var es2018_1 = __importDefault(require("./es2018"));
var utils_1 = require("./utils");
exports.default = {
    es2015: es2015_1.default,
    es2016: es2016_1.default,
    es2017: es2017_1.default,
    es2018: es2018_1.default,
    allOk: utils_1.allOk,
    testExpression: utils_1.testExpression
};
