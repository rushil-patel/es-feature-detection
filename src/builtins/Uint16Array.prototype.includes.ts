import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof (new Uint16Array()).includes !== 'undefined'";
export default () => testExpression(expression);
