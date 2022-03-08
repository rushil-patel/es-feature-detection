import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Math.clz32 !== 'undefined'";
export default () => testExpression(expression);
