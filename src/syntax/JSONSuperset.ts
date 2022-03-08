import testExpression from '~/src/utils/testExpression';

export const expression = 'eval(\'"\u2028"\');';
export default () => testExpression(expression);
