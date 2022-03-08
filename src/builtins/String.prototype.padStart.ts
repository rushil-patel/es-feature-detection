import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof ''.padStart !== 'undefined'";
export default () => testExpression(expression);
