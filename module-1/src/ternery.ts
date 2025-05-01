{

    // ternary operator

    const age: number = 15;

    if (age >= 18) {
        console.log("adult")
    }
    else {
        console.log("not adult")
    }


    const isAdult = age >=18 ? "adult" : "not adult"
    console.log({isAdult})

    // nullish coalescing operator
    const  isAuthenticated = null;
    const result1 = isAuthenticated ?? "Guest"

    console.log({result1})

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress?:String;
        }
    }


    const user: User = {
        name:"Fariha",
        address: {
            city: "cumilla",
            road:"sha"
        }
    }
    const permanentAddress = user?.address?.presentAddress??"no permenant address";
    console.log(permanentAddress)




}