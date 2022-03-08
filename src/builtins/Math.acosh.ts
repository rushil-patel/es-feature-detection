import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Math.acosh !== 'undefined'";
export default () => testExpression(expression);
