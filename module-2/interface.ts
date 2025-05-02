{
    type User1 = {
        name: string;
        age: number;
    }
    interface User2 {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string }

    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user2: UserWithRole2 = {
        name: "Persian",
        age: 100,
        role: "manager"
    }
    type rollNum = number

    const user1: User2 = {
        name: "Persian",
        age: 100,
    }

    // js -->object , array,function-->object

    type Roll1 = number[];
    interface Roll2 {
        [index: number]: number
    }

    const rollNumber: Roll1 = [1, 2, 3]


    // function

    type Add1 = (num1: number, num2: number) => number
    interface Add2 {
        (num1: number, num2: number): number
    }
    const add: Add2 = (num1, num2) => num1 + num2

}