import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof ''.endsWith !== 'undefined'";
export default () => testExpression(expression);
