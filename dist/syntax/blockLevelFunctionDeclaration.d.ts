export declare const expression = "(function() {\"use strict\";function f() {return 1;} {function f() {return 2;}}if (f() === 2)throw new Error(\"Failed\");})();";
declare const _default: () => boolean;
export default _default;
