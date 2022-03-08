import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Int8Array !== 'undefined'";
export default () => testExpression(expression);
