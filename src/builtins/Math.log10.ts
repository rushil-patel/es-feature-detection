import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Math.log10 !== 'undefined'";
export default () => testExpression(expression);
