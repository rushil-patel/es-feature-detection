import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof atob !== 'undefined'";
export default () => testExpression(expression);
