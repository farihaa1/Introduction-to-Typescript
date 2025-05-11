{
    // 

    const arrOfNumbers: number[] = [1, 2, 3, 4];

    // const arrOfStrings: string[] = ['1', '2', '3'];

    const arrOfStrings: string[] = arrOfNumbers.map(num => num.toString())
    console.log(arrOfStrings)

    type ArrayNumber = {
        height: string;
        width: string
    }

    type AreaString<T> = {
        [key in keyof T]: T[key]
    }
    const area1: AreaString<{ height: string; width: number }> = {
        height: "10",
        width: 50
    }

    // 
}