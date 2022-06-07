"use strict";
const getCity = (obj) => {
    return `${obj.country} ${obj.city}`;
};
const cities = {
    country: "Azerbaijan",
    city: "Baku"
};
console.log(getCity(cities));
