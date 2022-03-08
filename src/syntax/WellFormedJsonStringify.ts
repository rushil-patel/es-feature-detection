import testExpression from '~/src/utils/testExpression';

export const expression = 'JSON.stringify("\\udead") === \'"\\\\udead"\'';
export default () => testExpression(expression);
