import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Proxy !== 'undefined'";
export default () => testExpression(expression);
