function Foo(a:number, b:number) {
    return [a+b];
};

interface IGetData {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
};


async function getData<T extends object | any[]>(input: RequestInfo, init?: RequestInit) {
    const req = await fetch(input, init);
    
    return await req.json() as T;
};

const res = getData<IGetData>('https://fakestoreapi.com/products/1')
res.then(data => console.log(data));

