const getCity = (obj: {country:string, city:string}):string => {
    return `${obj.country} ${obj.city}`;
};

interface details {
    country: string,
    city: string
}

const cities:details = {
    country: "Azerbaijan",
    city: "Baku"
};

console.log(getCity(cities));