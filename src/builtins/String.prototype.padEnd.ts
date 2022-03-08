import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof ''.padEnd !== 'undefined'";
export default () => testExpression(expression);
