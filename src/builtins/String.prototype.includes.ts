import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof ''.includes !== 'undefined'";
export default () => testExpression(expression);
