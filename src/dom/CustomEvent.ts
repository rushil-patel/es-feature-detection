import testExpression from '~/src/utils/testExpression';

export const expression = "new CustomEvent('test')";
export default () => testExpression(expression);
