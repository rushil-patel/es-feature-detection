"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (obj) {
    var errors = [];
    for (var key in obj) {
        !obj[key] && errors.push(key);
    }
    return !errors.length || errors;
});
