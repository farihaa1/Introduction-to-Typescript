{
    //

    const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = "Next level web development"

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        id: 222,
        name: "Mr.x",
        email: "xW",
        devType: "mnl"
    })
    const student2 = addCourseToStudent({
        id: 44,
        name: "Mr.x",
        email: "xW",
        devType: "mnl"
    })
    const student3 = addCourseToStudent({
        id: 44,
        name: "Mr.x",
        email: "xW",
        devType: "mnl"
    })



    // 
}