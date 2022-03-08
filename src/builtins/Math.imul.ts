import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Math.imul !== 'undefined'";
export default () => testExpression(expression);
