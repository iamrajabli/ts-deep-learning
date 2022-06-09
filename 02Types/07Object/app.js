"use strict";
const getCity = (obj) => {
    return `${obj.country} ${obj.city}`;
};
const cities = {
    country: "Azerbaijan",
    city: "Baku",
    people: 'Azeri',
    count: 10030023,
    big: false
};
console.log(getCity(cities));
