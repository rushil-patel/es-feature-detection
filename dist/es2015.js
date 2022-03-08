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
var Array_from_1 = __importDefault(require("./builtins/Array.from"));
var Array_of_1 = __importDefault(require("./builtins/Array.of"));
var Array_prototype_copyWithin_1 = __importDefault(require("./builtins/Array.prototype.copyWithin"));
var Array_prototype_entries_1 = __importDefault(require("./builtins/Array.prototype.entries"));
var Array_prototype_fill_1 = __importDefault(require("./builtins/Array.prototype.fill"));
var Array_prototype_find_1 = __importDefault(require("./builtins/Array.prototype.find"));
var Array_prototype_findIndex_1 = __importDefault(require("./builtins/Array.prototype.findIndex"));
var Array_prototype_keys_1 = __importDefault(require("./builtins/Array.prototype.keys"));
var ArrayBuffer_1 = __importDefault(require("./builtins/ArrayBuffer"));
var atob_1 = __importDefault(require("./builtins/atob"));
var btoa_1 = __importDefault(require("./builtins/btoa"));
var DataView_1 = __importDefault(require("./builtins/DataView"));
var Float32Array_1 = __importDefault(require("./builtins/Float32Array"));
var Float64Array_1 = __importDefault(require("./builtins/Float64Array"));
var Int8Array_1 = __importDefault(require("./builtins/Int8Array"));
var Int16Array_1 = __importDefault(require("./builtins/Int16Array"));
var Int32Array_1 = __importDefault(require("./builtins/Int32Array"));
var Map_1 = __importDefault(require("./builtins/Map"));
var Math_acosh_1 = __importDefault(require("./builtins/Math.acosh"));
var Math_asinh_1 = __importDefault(require("./builtins/Math.asinh"));
var Math_cbrt_1 = __importDefault(require("./builtins/Math.cbrt"));
var Math_clz32_1 = __importDefault(require("./builtins/Math.clz32"));
var Math_cosh_1 = __importDefault(require("./builtins/Math.cosh"));
var Math_expm1_1 = __importDefault(require("./builtins/Math.expm1"));
var Math_fround_1 = __importDefault(require("./builtins/Math.fround"));
var Math_hypot_1 = __importDefault(require("./builtins/Math.hypot"));
var Math_imul_1 = __importDefault(require("./builtins/Math.imul"));
var Math_log1p_1 = __importDefault(require("./builtins/Math.log1p"));
var Math_log2_1 = __importDefault(require("./builtins/Math.log2"));
var Math_log10_1 = __importDefault(require("./builtins/Math.log10"));
var Math_sign_1 = __importDefault(require("./builtins/Math.sign"));
var Math_sinh_1 = __importDefault(require("./builtins/Math.sinh"));
var Math_tanh_1 = __importDefault(require("./builtins/Math.tanh"));
var Math_trunc_1 = __importDefault(require("./builtins/Math.trunc"));
var new_target_1 = __importDefault(require("./builtins/new.target"));
var Number_EPSILON_1 = __importDefault(require("./builtins/Number.EPSILON"));
var Number_isFinite_1 = __importDefault(require("./builtins/Number.isFinite"));
var Number_isInteger_1 = __importDefault(require("./builtins/Number.isInteger"));
var Number_isNaN_1 = __importDefault(require("./builtins/Number.isNaN"));
var Number_isSafeInteger_1 = __importDefault(require("./builtins/Number.isSafeInteger"));
var Number_MAX_SAFE_INTEGER_1 = __importDefault(require("./builtins/Number.MAX_SAFE_INTEGER"));
var Number_MIN_SAFE_INTEGER_1 = __importDefault(require("./builtins/Number.MIN_SAFE_INTEGER"));
var Number_parseInt_1 = __importDefault(require("./builtins/Number.parseInt"));
var Number_parseFloat_1 = __importDefault(require("./builtins/Number.parseFloat"));
var Object_assign_1 = __importDefault(require("./builtins/Object.assign"));
var Object_getOwnPropertySymbols_1 = __importDefault(require("./builtins/Object.getOwnPropertySymbols"));
var Object_is_1 = __importDefault(require("./builtins/Object.is"));
var Object_prototype___proto__1 = __importDefault(require("./builtins/Object.prototype.__proto__"));
var Object_setPrototypeOf_1 = __importDefault(require("./builtins/Object.setPrototypeOf"));
var Promise_1 = __importDefault(require("./builtins/Promise"));
var Proxy_1 = __importDefault(require("./builtins/Proxy"));
var Reflect_1 = __importDefault(require("./builtins/Reflect"));
var RegExp_prototype_sticky_1 = __importDefault(require("./builtins/RegExp.prototype.sticky"));
var Set_1 = __importDefault(require("./builtins/Set"));
var String_fromCodePoint_1 = __importDefault(require("./builtins/String.fromCodePoint"));
var String_prototype_codePointAt_1 = __importDefault(require("./builtins/String.prototype.codePointAt"));
var String_prototype_endsWith_1 = __importDefault(require("./builtins/String.prototype.endsWith"));
var String_prototype_includes_1 = __importDefault(require("./builtins/String.prototype.includes"));
var String_prototype_normalize_1 = __importDefault(require("./builtins/String.prototype.normalize"));
var String_prototype_repeat_1 = __importDefault(require("./builtins/String.prototype.repeat"));
var String_prototype_startsWith_1 = __importDefault(require("./builtins/String.prototype.startsWith"));
var String_raw_1 = __importDefault(require("./builtins/String.raw"));
var Symbol_1 = __importDefault(require("./builtins/Symbol"));
var Uint8Array_1 = __importDefault(require("./builtins/Uint8Array"));
var Uint8ClampedArray_1 = __importDefault(require("./builtins/Uint8ClampedArray"));
var Uint16Array_1 = __importDefault(require("./builtins/Uint16Array"));
var Uint32Array_1 = __importDefault(require("./builtins/Uint32Array"));
var WeakMap_1 = __importDefault(require("./builtins/WeakMap"));
var WeakSet_1 = __importDefault(require("./builtins/WeakSet"));
var arrowFunction_1 = __importDefault(require("./syntax/arrowFunction"));
var binaryLiterals_1 = __importDefault(require("./syntax/binaryLiterals"));
var blockLevelFunctionDeclaration_1 = __importDefault(require("./syntax/blockLevelFunctionDeclaration"));
var class_1 = __importDefault(require("./syntax/class"));
var computedProperty_1 = __importDefault(require("./syntax/computedProperty"));
var constLet_1 = __importDefault(require("./syntax/constLet"));
var defaultParameters_1 = __importDefault(require("./syntax/defaultParameters"));
var destructuring_1 = __importDefault(require("./syntax/destructuring"));
var forOf_1 = __importDefault(require("./syntax/forOf"));
var generatorFunction_1 = __importDefault(require("./syntax/generatorFunction"));
var octalLiterals_1 = __importDefault(require("./syntax/octalLiterals"));
var restParameters_1 = __importDefault(require("./syntax/restParameters"));
var shorthandMethod_1 = __importDefault(require("./syntax/shorthandMethod"));
var shorthandProperty_1 = __importDefault(require("./syntax/shorthandProperty"));
var spreadArray_1 = __importDefault(require("./syntax/spreadArray"));
var spreadFunctionCall_1 = __importDefault(require("./syntax/spreadFunctionCall"));
var templateStrings_1 = __importDefault(require("./syntax/templateStrings"));
var builtins = function () { return ({
    'Array.from': (0, Array_from_1.default)(),
    'Array.of': (0, Array_of_1.default)(),
    'Array.prototype.copyWithin': (0, Array_prototype_copyWithin_1.default)(),
    'Array.prototype.entries': (0, Array_prototype_entries_1.default)(),
    'Array.prototype.fill': (0, Array_prototype_fill_1.default)(),
    'Array.prototype.find': (0, Array_prototype_find_1.default)(),
    'Array.prototype.findIndex': (0, Array_prototype_findIndex_1.default)(),
    'Array.prototype.keys': (0, Array_prototype_keys_1.default)(),
    ArrayBuffer: (0, ArrayBuffer_1.default)(),
    atob: (0, atob_1.default)(),
    btoa: (0, btoa_1.default)(),
    DataView: (0, DataView_1.default)(),
    Float32Array: (0, Float32Array_1.default)(),
    Float64Array: (0, Float64Array_1.default)(),
    Int8Array: (0, Int8Array_1.default)(),
    Int16Array: (0, Int16Array_1.default)(),
    Int32Array: (0, Int32Array_1.default)(),
    Map: (0, Map_1.default)(),
    'Math.acosh': (0, Math_acosh_1.default)(),
    'Math.asinh': (0, Math_asinh_1.default)(),
    'Math.cosh': (0, Math_cosh_1.default)(),
    'Math.cbrt': (0, Math_cbrt_1.default)(),
    'Math.clz32': (0, Math_clz32_1.default)(),
    'Math.expm1': (0, Math_expm1_1.default)(),
    'Math.fround': (0, Math_fround_1.default)(),
    'Math.hypot': (0, Math_hypot_1.default)(),
    'Math.imul': (0, Math_imul_1.default)(),
    'Math.log1p': (0, Math_log1p_1.default)(),
    'Math.log2': (0, Math_log2_1.default)(),
    'Math.log10': (0, Math_log10_1.default)(),
    'Math.sign': (0, Math_sign_1.default)(),
    'Math.sinh': (0, Math_sinh_1.default)(),
    'Math.tanh': (0, Math_tanh_1.default)(),
    'Math.trunc': (0, Math_trunc_1.default)(),
    'new.target': (0, new_target_1.default)(),
    'Number.EPSILON': (0, Number_EPSILON_1.default)(),
    'Number.isFinite': (0, Number_isFinite_1.default)(),
    'Number.isInteger': (0, Number_isInteger_1.default)(),
    'Number.isNaN': (0, Number_isNaN_1.default)(),
    'Number.isSafeInteger': (0, Number_isSafeInteger_1.default)(),
    'Number.MAX_SAFE_INTEGER': (0, Number_MAX_SAFE_INTEGER_1.default)(),
    'Number.MIN_SAFE_INTEGER': (0, Number_MIN_SAFE_INTEGER_1.default)(),
    'Number.parseInt': (0, Number_parseInt_1.default)(),
    'Number.parseFloat': (0, Number_parseFloat_1.default)(),
    'Object.assign': (0, Object_assign_1.default)(),
    'Object.getOwnPropertySymbols': (0, Object_getOwnPropertySymbols_1.default)(),
    'Object.is': (0, Object_is_1.default)(),
    'Object.prototype.__proto__': (0, Object_prototype___proto__1.default)(),
    'Object.setPrototypeOf': (0, Object_setPrototypeOf_1.default)(),
    Promise: (0, Promise_1.default)(),
    Proxy: (0, Proxy_1.default)(),
    Reflect: (0, Reflect_1.default)(),
    'RegExp.prototype.sticky': (0, RegExp_prototype_sticky_1.default)(),
    Set: (0, Set_1.default)(),
    'String.fromCodePoint': (0, String_fromCodePoint_1.default)(),
    'String.prototype.codePointAt': (0, String_prototype_codePointAt_1.default)(),
    'String.prototype.endsWith': (0, String_prototype_endsWith_1.default)(),
    'String.prototype.includes': (0, String_prototype_includes_1.default)(),
    'String.prototype.normalize': (0, String_prototype_normalize_1.default)(),
    'String.prototype.repeat': (0, String_prototype_repeat_1.default)(),
    'String.prototype.startsWith': (0, String_prototype_startsWith_1.default)(),
    'String.raw': (0, String_raw_1.default)(),
    Symbol: (0, Symbol_1.default)(),
    Uint8Array: (0, Uint8Array_1.default)(),
    Uint8ClampedArray: (0, Uint8ClampedArray_1.default)(),
    Uint16Array: (0, Uint16Array_1.default)(),
    Uint32Array: (0, Uint32Array_1.default)(),
    WeakMap: (0, WeakMap_1.default)(),
    WeakSet: (0, WeakSet_1.default)()
}); };
exports.builtins = builtins;
var syntax = function () { return ({
    arrowFunction: (0, arrowFunction_1.default)(),
    binaryLiterals: (0, binaryLiterals_1.default)(),
    blockLevelFunctionDeclaration: (0, blockLevelFunctionDeclaration_1.default)(),
    _class: (0, class_1.default)(),
    computedProperty: (0, computedProperty_1.default)(),
    constLet: (0, constLet_1.default)(),
    defaultParameters: (0, defaultParameters_1.default)(),
    destructuring: (0, destructuring_1.default)(),
    forOf: (0, forOf_1.default)(),
    generatorFunction: (0, generatorFunction_1.default)(),
    octalLiterals: (0, octalLiterals_1.default)(),
    restParameters: (0, restParameters_1.default)(),
    shorthandMethod: (0, shorthandMethod_1.default)(),
    shorthandProperty: (0, shorthandProperty_1.default)(),
    spreadArray: (0, spreadArray_1.default)(),
    spreadFunctionCall: (0, spreadFunctionCall_1.default)(),
    templateStrings: (0, templateStrings_1.default)()
}); };
exports.syntax = syntax;
exports.default = (function () { return (__assign(__assign({}, (0, exports.builtins)()), (0, exports.syntax)())); });
