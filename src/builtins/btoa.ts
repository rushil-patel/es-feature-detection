import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof btoa !== 'undefined'";
export default () => testExpression(expression);
