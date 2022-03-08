import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof ''.codePointAt !== 'undefined'";
export default () => testExpression(expression);
