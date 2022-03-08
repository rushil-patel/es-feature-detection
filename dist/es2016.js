"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.syntax = exports.builtins = void 0;
var Array_prototype_includes_1 = __importDefault(require("./builtins/Array.prototype.includes"));
var Float32Array_prototype_includes_1 = __importDefault(require("./builtins/Float32Array.prototype.includes"));
var Float64Array_prototype_includes_1 = __importDefault(require("./builtins/Float64Array.prototype.includes"));
var Int8Array_prototype_includes_1 = __importDefault(require("./builtins/Int8Array.prototype.includes"));
var Int16Array_prototype_includes_1 = __importDefault(require("./builtins/Int16Array.prototype.includes"));
var Int32Array_prototype_includes_1 = __importDefault(require("./builtins/Int32Array.prototype.includes"));
var Uint8Array_prototype_includes_1 = __importDefault(require("./builtins/Uint8Array.prototype.includes"));
var Uint8ClampedArray_prototype_includes_1 = __importDefault(require("./builtins/Uint8ClampedArray.prototype.includes"));
var Uint16Array_prototype_includes_1 = __importDefault(require("./builtins/Uint16Array.prototype.includes"));
var Uint32Array_prototype_includes_1 = __importDefault(require("./builtins/Uint32Array.prototype.includes"));
var exponentiationOperator_1 = __importDefault(require("./syntax/exponentiationOperator"));
var nestedRestDestructuring_1 = __importDefault(require("./syntax/nestedRestDestructuring"));
var restParameterDestructuring_1 = __importDefault(require("./syntax/restParameterDestructuring"));
var builtins = function () { return ({
    'Array.prototype.includes': (0, Array_prototype_includes_1.default)(),
    'Float32Array.prototype.includes': (0, Float32Array_prototype_includes_1.default)(),
    'Float64Array.prototype.includes': (0, Float64Array_prototype_includes_1.default)(),
    'Int8Array.prototype.includes': (0, Int8Array_prototype_includes_1.default)(),
    'Int16Array.prototype.includes': (0, Int16Array_prototype_includes_1.default)(),
    'Int32Array.prototype.includes': (0, Int32Array_prototype_includes_1.default)(),
    'Uint8Array.prototype.includes': (0, Uint8Array_prototype_includes_1.default)(),
    'Uint8ClampedArray.prototype.includes': (0, Uint8ClampedArray_prototype_includes_1.default)(),
    'Uint16Array.prototype.includes': (0, Uint16Array_prototype_includes_1.default)(),
    'Uint32Array.prototype.includes': (0, Uint32Array_prototype_includes_1.default)()
}); };
exports.builtins = builtins;
var syntax = function () { return ({
    exponentiationOperator: (0, exponentiationOperator_1.default)(),
    nestedRestDestructuring: (0, nestedRestDestructuring_1.default)(),
    restParameterDestructuring: (0, restParameterDestructuring_1.default)()
}); };
exports.syntax = syntax;
exports.default = (function () { return (__assign(__assign({}, (0, exports.builtins)()), (0, exports.syntax)())); });
