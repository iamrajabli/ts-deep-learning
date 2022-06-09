const getCity = (obj: {country:string, city:string}):string => {
    return `${obj.country} ${obj.city}`;
};

interface details {
    country: string,
    city: string
}

interface detailsMore extends details {
    people: string,
    count: number,
    big: boolean
}



type Idetails = {
    country: string,
    city: string
}

const cities:detailsMore = {
    country: "Azerbaijan",
    city: "Baku",
    people: 'Azeri',
    count: 10030023,
    big: false
};

console.log(getCity(cities));