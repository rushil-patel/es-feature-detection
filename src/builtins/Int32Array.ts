import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Int32Array !== 'undefined'";
export default () => testExpression(expression);
