import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Object.entries !== 'undefined'";
export default () => testExpression(expression);
