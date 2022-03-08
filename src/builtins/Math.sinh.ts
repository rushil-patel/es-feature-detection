import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Math.sinh !== 'undefined'";
export default () => testExpression(expression);
