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
var Atomics_1 = __importDefault(require("./builtins/Atomics"));
var Object_entries_1 = __importDefault(require("./builtins/Object.entries"));
var Object_getOwnPropertyDescriptors_1 = __importDefault(require("./builtins/Object.getOwnPropertyDescriptors"));
var Object_values_1 = __importDefault(require("./builtins/Object.values"));
var SharedArrayBuffer_1 = __importDefault(require("./builtins/SharedArrayBuffer"));
var String_prototype_padEnd_1 = __importDefault(require("./builtins/String.prototype.padEnd"));
var String_prototype_padStart_1 = __importDefault(require("./builtins/String.prototype.padStart"));
var asyncAwait_1 = __importDefault(require("./syntax/asyncAwait"));
var trailingParameterCommas_1 = __importDefault(require("./syntax/trailingParameterCommas"));
var builtins = function () { return ({
    Atomics: (0, Atomics_1.default)(),
    'Object.entries': (0, Object_entries_1.default)(),
    'Object.getOwnPropertyDescriptors': (0, Object_getOwnPropertyDescriptors_1.default)(),
    'Object.values': (0, Object_values_1.default)(),
    SharedArrayBuffer: (0, SharedArrayBuffer_1.default)(),
    'String.prototype.padEnd': (0, String_prototype_padEnd_1.default)(),
    'String.prototype.padStart': (0, String_prototype_padStart_1.default)()
}); };
exports.builtins = builtins;
var syntax = function () { return ({
    asyncAwait: (0, asyncAwait_1.default)(),
    trailingParameterCommas: (0, trailingParameterCommas_1.default)()
}); };
exports.syntax = syntax;
exports.default = (function () { return (__assign(__assign({}, (0, exports.builtins)()), (0, exports.syntax)())); });
