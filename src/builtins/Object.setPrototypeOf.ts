import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Object.setPrototypeOf !== 'undefined'";
export default () => testExpression(expression);
