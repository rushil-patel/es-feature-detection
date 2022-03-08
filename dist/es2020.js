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
var BigInt_1 = __importDefault(require("./builtins/BigInt"));
var globalThis_1 = __importDefault(require("./builtins/globalThis"));
var Promise_allSettled_1 = __importDefault(require("./builtins/Promise.allSettled"));
var String_prototype_matchAll_1 = __importDefault(require("./builtins/String.prototype.matchAll"));
var DynamicImport_1 = __importDefault(require("./syntax/DynamicImport"));
var NullishCoalescing_1 = __importDefault(require("./syntax/NullishCoalescing"));
var OptionalChaining_1 = __importDefault(require("./syntax/OptionalChaining"));
var builtins = function () { return ({
    'BigInt': (0, BigInt_1.default)(),
    'globalThis': (0, globalThis_1.default)(),
    'Promise.allSettled': (0, Promise_allSettled_1.default)(),
    'String.prototype.matchAll': (0, String_prototype_matchAll_1.default)()
}); };
exports.builtins = builtins;
var syntax = function () { return ({
    DynamicImport: (0, DynamicImport_1.default)(),
    NullishCoalescing: (0, NullishCoalescing_1.default)(),
    OptionalChaining: (0, OptionalChaining_1.default)()
}); };
exports.syntax = syntax;
exports.default = (function () { return (__assign(__assign({}, (0, exports.builtins)()), (0, exports.syntax)())); });
