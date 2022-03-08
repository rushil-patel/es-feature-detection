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
var Array_prototype_flat_1 = __importDefault(require("./builtins/Array.prototype.flat"));
var Array_prototype_flatMap_1 = __importDefault(require("./builtins/Array.prototype.flatMap"));
var Object_fromEntries_1 = __importDefault(require("./builtins/Object.fromEntries"));
var String_prototype_trimEnd_1 = __importDefault(require("./builtins/String.prototype.trimEnd"));
var String_prototype_trimStart_1 = __importDefault(require("./builtins/String.prototype.trimStart"));
var Symbol_prototype_description_1 = __importDefault(require("./builtins/Symbol.prototype.description"));
var JSONSuperset_1 = __importDefault(require("./syntax/JSONSuperset"));
var optionalCatchBinding_1 = __importDefault(require("./syntax/optionalCatchBinding"));
var WellFormedJsonStringify_1 = __importDefault(require("./syntax/WellFormedJsonStringify"));
var builtins = function () { return ({
    'Array.prototype.flat': (0, Array_prototype_flat_1.default)(),
    'Array.prototype.flatMap': (0, Array_prototype_flatMap_1.default)(),
    'Object.fromEntries': (0, Object_fromEntries_1.default)(),
    'String.prototype.trimEnd': (0, String_prototype_trimEnd_1.default)(),
    'String.prototype.trimStart': (0, String_prototype_trimStart_1.default)(),
    'Symbol.prototype.description': (0, Symbol_prototype_description_1.default)()
}); };
exports.builtins = builtins;
var syntax = function () { return ({
    JSONSuperset: (0, JSONSuperset_1.default)(),
    optionalCatchBinding: (0, optionalCatchBinding_1.default)(),
    WellFormedJsonStringify: (0, WellFormedJsonStringify_1.default)()
}); };
exports.syntax = syntax;
exports.default = (function () { return (__assign(__assign({}, (0, exports.builtins)()), (0, exports.syntax)())); });
