/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// 2. Function using the type
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else {
        return 'Teaching History';
    }
}
// 3. Test
console.log(teachClass('Math'));
console.log(teachClass('History'));

/******/ })()
;
//# sourceMappingURL=bundle.js.map