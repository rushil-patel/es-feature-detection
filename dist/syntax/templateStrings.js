"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expression = void 0;
var testExpression_1 = __importDefault(require("~/src/utils/testExpression"));
exports.expression = 'function f(a, b) {return a[0]+(b+1)+a[1];}var s=`life=${40+2}`,t=f`a:${5}x`';
exports.default = (function () { return (0, testExpression_1.default)(exports.expression); });
