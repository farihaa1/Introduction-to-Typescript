{

    // type alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student
        = {
        name: 'fariha',
        age: 22,
        gender: "female",
        contactNo: "01934455",
        address: "cumilla",
    }

    const student2: Student = {
        name: "fariha2",
        age: 21,
        gender: "female",
        address: "cumilla2"
    }

    type UserName = string
    type IsAdmin = boolean
    const useName: UserName = "persion"
    const isAdmin: IsAdmin = true



    type Add = (num1: number, num2: number) => number

    const add: Add = (num1, num2) => (num1 + num2)

    add(2, 3)




}