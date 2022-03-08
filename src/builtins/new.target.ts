import testExpression from '~/src/utils/testExpression';

export const expression = '(function() { return new.target })()';
export default () => testExpression(expression);
