import testExpression from '~/src/utils/testExpression';

export const expression = 'var o={a(){}}';
export default () => testExpression(expression);
