function Foo(a:number, b:number) {
    return [a+b];
};

interface IGetData {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
};


async function getData(url:string): Promise<IGetData> {
    const req = await fetch(url);
    if(!req.ok) {
        throw new Error(`could not ${url}`);
    }
    return await req.json();
};

getData('https://fakestoreapi.com/prodsucts/1')
    .then(data => console.log(data));
    
