import testExpression from '~/src/utils/testExpression';

export const expression = '(function() {"use strict";function f() {return 1;} {function f() {return 2;}}if (f() === 2)throw new Error("Failed");})();';
export default () => testExpression(expression);
