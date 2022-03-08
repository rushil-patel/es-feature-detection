import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof [].findIndex !== 'undefined'";
export default () => testExpression(expression);
