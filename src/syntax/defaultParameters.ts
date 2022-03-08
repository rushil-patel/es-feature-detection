import testExpression from '~/src/utils/testExpression';

export const expression = 'function t(a=1) {};t()';
export default () => testExpression(expression);
