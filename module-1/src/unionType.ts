{

    // type FrontendDeveloper = 'fake' | 'junior';

    // const newDeveloper: FrontendDeveloper = 'fake'


    // type User = {
    //     name: string;
    //     email: string;
    //     gender: "male" | "female"
    // }

    // const user1: User = {
    //     name: 'fariha',
    //     email: "faa",
    //     gender: "female",

    // }

    // intersection
    type FrontendDeveloper2 = {
        skills: string[];
        designation1: "Frontend Developer"
    }
    type BackendDeveloper2 = {
        skills: string[];
        designation2: "Backend Developer"
    }

    type FullStack = FrontendDeveloper2 & BackendDeveloper2

    const fullStackDeveloper: FullStack = {
        skills: ['html', 'js'],
        designation1: "Frontend Developer",
        designation2: "Backend Developer",
    }




}