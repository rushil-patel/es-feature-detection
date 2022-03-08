import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof ''.startsWith !== 'undefined'";
export default () => testExpression(expression);
