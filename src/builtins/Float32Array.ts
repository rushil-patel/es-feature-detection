import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Float32Array !== 'undefined'";
export default () => testExpression(expression);
