import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof requestAnimationFrame !== 'undefined'";
export default () => testExpression(expression);
