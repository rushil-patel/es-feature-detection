"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expression = void 0;
var testExpression_1 = __importDefault(require("~/src/utils/testExpression"));
exports.expression = 'var {a:A,b:B=3}={a:1};var [a,b]=[1,2]';
exports.default = (function () { return (0, testExpression_1.default)(exports.expression); });