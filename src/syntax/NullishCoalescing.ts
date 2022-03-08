import testExpression from '~/src/utils/testExpression';

export const expression = 'let a;a??"ok"';
export default () => testExpression(expression);
