{
    // generic types

    type GenericArray<T> = Array<T>


    const rollNumbers: Array<number> = [3, 6, 8];
    const mentors: Array<string> = ["Mr. X", "Mr. Y"];
    const boolArray: Array<boolean> = [true, false, true];

    const user: GenericArray<{ name: string; age: number }> = [
        {
            name: "Fariha",
            age: 1000,
        },

    ]

    // generic tuple

    type GenericTuple<X, Y> = [X, Y]
    const manus: GenericTuple<string, string> = ["Mr.X", "Mrs.Y"]
    const UserWithId: GenericTuple<number, { name: string, email: string }> = [123, { name: "name", email: "aa2gamil" }]


}