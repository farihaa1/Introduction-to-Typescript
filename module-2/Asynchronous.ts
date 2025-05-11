{
    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "something"
            if (data) {
                resolve(data)
            } else {
                reject('failed to load data')
            }
        })
    }
    // calling create promise function
    const showData = async (): Promise<string> => {
        const data = await createPromise()
        console.log(data)
        return data
    }
    showData()

    type ToDo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }

    const getToDo = async (): Promise<ToDo> => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        console.log(data)
        return data
    }
    getToDo()
}