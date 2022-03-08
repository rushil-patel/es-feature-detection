import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Intl.Collators !== 'undefined'";
export default () => testExpression(expression);
