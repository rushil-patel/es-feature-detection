import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof [].entries !== 'undefined'";
export default () => testExpression(expression);
