import testExpression from '~/src/utils/testExpression';

export const expression = 'var f=()=>{}';
export default () => testExpression(expression);
