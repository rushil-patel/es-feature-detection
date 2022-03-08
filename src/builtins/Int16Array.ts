import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Int16Array !== 'undefined'";
export default () => testExpression(expression);
