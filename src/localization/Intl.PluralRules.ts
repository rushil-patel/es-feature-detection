import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Intl.PluralRules !== 'undefined'";
export default () => testExpression(expression);
