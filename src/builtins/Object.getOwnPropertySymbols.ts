import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Object.getOwnPropertySymbols !== 'undefined'";
export default () => testExpression(expression);
