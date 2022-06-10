function Returner<T extends string | boolean>(param: T) {
    return param;
}

console.log(Returner(false));

function Generic<T>(a:T, b: T) {
    return [a,b];
}

console.log(Generic<number>(4,7));
