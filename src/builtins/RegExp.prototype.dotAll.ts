import testExpression from '~/src/utils/testExpression';

export const expression = 'return /.*/s.dotAll === true';
export default () => testExpression(expression);
