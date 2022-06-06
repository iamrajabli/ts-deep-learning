function getFullName(name:string, surname:string):string {
    return `${name} ${surname}`;
};

const getFullNameArrow = (name:string, surname:string):string => {
    return `${name} ${surname}`;
};

console.log(getFullName("Хикмет", "Раджабли"));
