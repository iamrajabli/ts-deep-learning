"use strict";
function getFullName(name, surname) {
    return `${name} ${surname}`;
}
;
const getFullNameArrow = (name, surname) => {
    return `${name} ${surname}`;
};
console.log(getFullName("Хикмет", "Раджабли"));
const getCity = (obj) => {
    return `${obj.country} ${obj.city}`;
};
const cities = {
    country: "Azerbaijan",
    city: "Baku"
};
console.log(getCity(cities));
