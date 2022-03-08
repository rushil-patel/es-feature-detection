import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Math.hypot !== 'undefined'";
export default () => testExpression(expression);
