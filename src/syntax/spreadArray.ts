import testExpression from '~/src/utils/testExpression';

export const expression = 'var a=[...[1,2]];var [...b]=a;';
export default () => testExpression(expression);
