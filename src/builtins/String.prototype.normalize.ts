import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof ''.normalize !== 'undefined'";
export default () => testExpression(expression);
