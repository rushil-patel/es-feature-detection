import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Set !== 'undefined'";
export default () => testExpression(expression);
