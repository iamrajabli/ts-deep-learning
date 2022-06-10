function Returner<T extends string | boolean>(param: T) {
    return param;
}

console.log(Returner(false));

function Generic<T>(a:T, b: T) {
    return [a,b];
}

console.log(Generic(4,7));


function getAsType<Type>(selector:string, parent = document) {
    if(!selector) throw new Error('Selector is not valid');
    
    return parent.querySelector(selector) as Type
}

const div = getAsType<HTMLDivElement>('div');
console.log(div);
