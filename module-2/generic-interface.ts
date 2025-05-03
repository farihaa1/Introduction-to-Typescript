{
    // 

    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        };
        smartWatch: T
    }

    type dev = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<dev> = {
        name: "name",
        computer: {
            brand: "Hp",
            model: "Elitebook",
            releaseYear: 2011
        },
        smartWatch: {
            brand: "Emilab",
            model: "kw55",
            display: "oled"
        }
    }

    const richDeveloper: Developer<{
        brand: string;
        model: string;
        display: string;
        sleepTrack: boolean
    }> = {
        name: "name",
        computer: {
            brand: "Hp-2",
            model: "Elitebook-2",
            releaseYear: 2011
        },
        smartWatch: {
            brand: "apple",
            model: "kw55",
            display: "old",
            sleepTrack: true
        }
    }

    // 
}