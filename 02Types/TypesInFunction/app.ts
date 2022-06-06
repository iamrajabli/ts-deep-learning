function getFullName(name:string, surname:string):string {
    return `${name} ${surname}`;
};

const getFullNameArrow = (name:string, surname:string):string => {
    return `${name} ${surname}`;
};

console.log(getFullName("Хикмет", "Раджабли"));


const getCity = (obj: {country:string, city:string}):string => {
    return `${obj.country} ${obj.city}`;
};

const cities = {
    country: "Azerbaijan",
    city: "Baku"
};

console.log(getCity(cities));
