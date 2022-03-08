import testExpression from '~/src/utils/testExpression';

export const expression = "return typeof Object.getOwnPropertyDescriptors !== 'undefined'";
export default () => testExpression(expression);
