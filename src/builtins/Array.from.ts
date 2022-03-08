import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Array.from !== 'undefined'";
export default () => testExpression(expression);
