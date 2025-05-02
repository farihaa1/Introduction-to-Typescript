{
    //type assertion

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === "string") {
            const convertValue = parseFloat(value) * 100

            return `the converted num ${convertValue}`
        }
        if (typeof value === "number") {
            return value * 100
        }
    }

    const result1 = kgToGm(1000) as number

    type CustomError = {
        message: string
    }

    try {

    } catch (error) {
        console.log((error as CustomError).message)
    }

    //
}