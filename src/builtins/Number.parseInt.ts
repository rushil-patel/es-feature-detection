import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Number.parseInt !== 'undefined'";
export default () => testExpression(expression);
