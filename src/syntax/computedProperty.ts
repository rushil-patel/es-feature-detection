import testExpression from '~/src/utils/testExpression';

export const expression = 'var a="a",o={[a]:1,["p"]:2,[a+"p"]:3}';
export default () => testExpression(expression);
