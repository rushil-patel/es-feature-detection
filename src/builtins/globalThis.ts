import testExpression from '~/src/utils/testExpression';

export const expression = 'typeof globalThis !== "undefined"';
export default () => testExpression(expression);
