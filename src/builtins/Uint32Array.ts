import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Uint32Array !== 'undefined'";
export default () => testExpression(expression);
