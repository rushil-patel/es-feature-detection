"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expression = void 0;
var testExpression_1 = __importDefault(require("~/src/utils/testExpression"));
exports.expression = '(function() {"use strict";function f() {return 1;} {function f() {return 2;}}if (f() === 2)throw new Error("Failed");})();';
exports.default = (function () { return (0, testExpression_1.default)(exports.expression); });
