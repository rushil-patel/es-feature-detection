import testExpression from '~/src/utils/testExpression';

export const expression = 'function f(a,b,){};f()';
export default () => testExpression(expression);
