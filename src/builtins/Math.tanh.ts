import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Math.tanh !== 'undefined'";
export default () => testExpression(expression);
