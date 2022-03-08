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
var Promise_prototype_finally_1 = __importDefault(require("./builtins/Promise.prototype.finally"));
var RegExp_prototype_dotAll_1 = __importDefault(require("./builtins/RegExp.prototype.dotAll"));
var RegExp_prototype_unicode_1 = __importDefault(require("./builtins/RegExp.prototype.unicode"));
var Symbol_asyncIterator_1 = __importDefault(require("./builtins/Symbol.asyncIterator"));
var objectSpreadProperties_1 = __importDefault(require("./syntax/objectSpreadProperties"));
var regExpLookbehindAssertions_1 = __importDefault(require("./syntax/regExpLookbehindAssertions"));
var regExpNamedCaptureGroups_1 = __importDefault(require("./syntax/regExpNamedCaptureGroups"));
var TemplateLiteralRevision_1 = __importDefault(require("./syntax/TemplateLiteralRevision"));
var builtins = function () { return ({
    'Promise.prototype.finally': (0, Promise_prototype_finally_1.default)(),
    'RegExp.prototype.dotAll': (0, RegExp_prototype_dotAll_1.default)(),
    'RegExp.prototype.unicode': (0, RegExp_prototype_unicode_1.default)(),
    'Symbol.asyncIterator': (0, Symbol_asyncIterator_1.default)()
}); };
exports.builtins = builtins;
var syntax = function () { return ({
    objectSpreadProperties: (0, objectSpreadProperties_1.default)(),
    regExpLookbehindAssertions: (0, regExpLookbehindAssertions_1.default)(),
    regExpNamedCaptureGroups: (0, regExpNamedCaptureGroups_1.default)(),
    TemplateLiteralRevision: (0, TemplateLiteralRevision_1.default)()
}); };
exports.syntax = syntax;
exports.default = (function () { return (__assign(__assign({}, (0, exports.builtins)()), (0, exports.syntax)())); });
