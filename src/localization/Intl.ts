import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Intl !== 'undefined'";
export default () => testExpression(expression);
