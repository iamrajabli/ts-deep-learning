const getCity = (obj: {country:string, city:string}):string => {
    return `${obj.country} ${obj.city}`;
};

const cities = {
    country: "Azerbaijan",
    city: "Baku"
};

console.log(getCity(cities));