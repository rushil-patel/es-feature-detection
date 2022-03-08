import testExpression from '~/src/utils/testExpression';

export const expression = 'function t(a,...args) {}t(...[1,2,3]);t.call(this,...[1,2,3]);';
export default () => testExpression(expression);
