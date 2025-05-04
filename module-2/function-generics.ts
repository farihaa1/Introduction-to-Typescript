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
    const res3 = createArrayWithGeneric<string>("Bd");


    type User = { id: number; name: string }
    const res_obj = createArrayWithGeneric<User>({
        id: 222, name: "mr",
    })

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }
    const res11 = createArrayWithTuple<string, number>("Bd", 12)

    const addCourseToStudent = <T>(student: T) => {
        const course = "Next level web development"

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: "Mr.x", email: "xW", devType: "mnl" })

    // 
}