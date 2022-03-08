import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Map !== 'undefined'";
export default () => testExpression(expression);
