const getCity = (obj: {country:string, city:string}):string => {
    return `${obj.country} ${obj.city}`;
};

interface details {
    country: string,
    city: string
}

type Idetails = {
    country: string,
    city: string
}

const cities:Idetails = {
    country: "Azerbaijan",
    city: "Baku"
};

console.log(getCity(cities));