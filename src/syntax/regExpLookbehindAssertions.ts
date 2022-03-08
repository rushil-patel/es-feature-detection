import testExpression from '~/src/utils/testExpression';

export const expression = '~/src/(?<!a)b(?<=b)c/';
export default () => testExpression(expression);
