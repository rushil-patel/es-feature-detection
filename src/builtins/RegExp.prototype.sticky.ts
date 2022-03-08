import testExpression from '~/src/utils/testExpression';

export const expression = 'return /.*/y.sticky === true';
export default () => testExpression(expression);
