function getAPI(url: string) {
    interface API {
        completed: boolean;
        id: number;
        title: string;
        userId: number;
    }

    
    async function getData(url: string) {
        const req = await fetch(url);
        return await req.json();
    }
    
    getData(url)
        .then((data:API) => console.log(data));    
}

export default getAPI;
