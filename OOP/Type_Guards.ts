{

    type AlphaNumeric = string | number
    // typeof
    const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    }

    const result1 = add(2, 3);
    const result2 = add("2", "3");

    console.log(result1, result2)

    // in guard
    type NormalUser = {
        name: string
    }
    type AdminUser = {
        name: string;
        role: "admin"
    }
    const user: AdminUser = {
        name: "fariha",
        role: "admin"
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`my name is ${user.name} and my role is ${user.role}`)
        }
        else {
            console.log(`my name is ${user.name} `)
        }
    }
    getUser(user)


    const normalUser: NormalUser = {
        name: "Mr.Normal "
    }
    getUser(normalUser)
}