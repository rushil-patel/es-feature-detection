import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof (new Float64Array()).includes !== 'undefined'";
export default () => testExpression(expression);
