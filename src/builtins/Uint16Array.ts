import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Uint16Array !== 'undefined'";
export default () => testExpression(expression);
