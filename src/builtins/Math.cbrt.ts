import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Math.cbrt !== 'undefined'";
export default () => testExpression(expression);
