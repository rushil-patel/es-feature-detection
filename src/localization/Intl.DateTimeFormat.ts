import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Intl.DateTimeFormat !== 'undefined'";
export default () => testExpression(expression);
