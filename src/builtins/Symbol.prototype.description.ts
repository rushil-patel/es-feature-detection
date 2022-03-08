import testExpression from '~/src/utils/testExpression';

export const expression = 'typeof Symbol("desc").description !== "undefined"';
export default () => testExpression(expression);
