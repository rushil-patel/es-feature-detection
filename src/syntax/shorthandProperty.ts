import testExpression from '~/src/utils/testExpression';

export const expression = 'var a=2,o={a}';
export default () => testExpression(expression);
