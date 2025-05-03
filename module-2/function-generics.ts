{
    //

    const createArray = (param: string): string[] => {
        return [param]
    }
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res1 = createArray('Bangladesh');
    const res2 = createArrayWithGeneric<boolean>(true);


    type User = { id: number; name: string }
    const res_obj = createArrayWithGeneric<User>({
        id: 222, name: "mr",
    })


    // 
}