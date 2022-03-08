import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Math.cosh !== 'undefined'";
export default () => testExpression(expression);
