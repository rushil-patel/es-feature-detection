import testExpression from '~/src/utils/testExpression';

export const expression = 'var {a:{b,c}}={a:{b:1,c:2}}';
export default () => testExpression(expression);
