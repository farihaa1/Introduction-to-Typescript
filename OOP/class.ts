{
    // OOP - Class

    class Animal {
        name: string;
        species: string;
        sound: string;

        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound
        }
        makeSound() {
            console.log(`the ${this.name} says ${this.sound}`)
        }


    }

    const cat = new Animal("German", "cat", "mew mew")
    // cat.makeSound();

    class Person {
        // nameP: string;
        // ageP: number;
        // contact: string;

        // parameter properties
        constructor(public nameP: string,
            public ageP: number,
            public contact: string) {
            // this.nameP = nameP;
            // this.ageP = ageP;
            // this.contact = contact;
        }
        makePerson() {
            console.log(`the ${this.nameP} ageP ${this.ageP}`);
        }
    }

    const girl = new Person("Fariha", 22, "0129");
    girl.makePerson()



    // 
}