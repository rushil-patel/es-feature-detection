import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Number.isFinite !== 'undefined'";
export default () => testExpression(expression);
