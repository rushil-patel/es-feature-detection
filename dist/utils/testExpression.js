"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function testExpression(expression) {
    try {
        return (new Function('"use strict";\n' + expression))() !== false;
    }
    catch (_a) {
        return false;
    }
}
exports.default = testExpression;
