{
    class Animal {
        name: string;
        species: string;
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I am making sound")
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeBark() {
            console.log("Dog us Barking")
        }
    }

    // function
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }
    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }


    }

    const dog = new Dog("Dog", "dogiee")
    // dog.makeBark()
    getAnimal(dog)
}