import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof (new Uint8ClampedArray()).includes !== 'undefined'";
export default () => testExpression(expression);
