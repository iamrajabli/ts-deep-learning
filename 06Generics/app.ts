function Returner<T extends string | boolean>(param: T) {
    return param;
}

console.log(Returner(true));