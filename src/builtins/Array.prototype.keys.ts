import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof [].keys !== 'undefined'";
export default () => testExpression(expression);
