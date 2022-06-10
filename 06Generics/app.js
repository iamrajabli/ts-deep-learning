"use strict";
function Returner(param) {
    return param;
}
console.log(Returner(false));
function Generic(a, b) {
    return [a, b];
}
console.log(Generic(4, 7));
function getAsType(selector, parent = document) {
    if (!selector)
        throw new Error('Selector is not valid');
    return parent.querySelector(selector);
}
const div = getAsType('div');
console.log(div);
