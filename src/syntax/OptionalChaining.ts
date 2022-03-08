import testExpression from '~/src/utils/testExpression';

export const expression = 'var a={};a?.b?.c()';
export default () => testExpression(expression);
