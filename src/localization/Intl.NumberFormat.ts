import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Intl.NumberFormat !== 'undefined'";
export default () => testExpression(expression);
