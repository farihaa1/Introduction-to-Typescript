{
    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }

    class Student extends Parent {
        constructor(name: string, age: number, address: string) {
            // this.name = name;
            // this.age = age;
            // this.address = address;

            super(name, age, address)
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }

    const student1 = new Student("Mr", 20, "uganda")

    class Teacher extends Parent {
        // name: string;
        // age: number;
        // address: string;
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }
        getSleep(age: number) {
            console.log(`${this.name} will sleep for ${age}`)
        }
    }
    const teacher = new Teacher("Mr. Teacher", 30, "Dhaka", "teacher")
    teacher.getSleep(22)
}