"use strict";
function getFullName(name, surname) {
    return `${name} ${surname}`;
}
;
const getFullNameArrow = (name, surname) => {
    return `${name} ${surname}`;
};
console.log(getFullName("Хикмет", "Раджабли"));
