import testExpression from '~/src/utils/testExpression';

export const expression = 'return typeof Promise.prototype.finally !== "undefined"';
export default () => testExpression(expression);
