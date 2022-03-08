import testExpression from '~/src/utils/testExpression';

export const expression = 'function* g(){}';
export default () => testExpression(expression);
