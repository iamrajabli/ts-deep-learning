interface API {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

async function getData(url: string): Promise<API> {
    const req = await fetch(url);
    return await req.json();
}

getData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data));