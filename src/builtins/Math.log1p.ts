import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Math.log1p !== 'undefined'";
export default () => testExpression(expression);
