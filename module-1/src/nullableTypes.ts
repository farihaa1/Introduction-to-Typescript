{
    // nullable types

    const searchName = (value: string | null) => {
        if (value) {
            console.log("searching")
        }
        else {
            console.log("not searching")
        }
    }

    searchName(null)


    // unknown types
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const covert = value + 10
            console.log(covert)
        }
        if (typeof value === "string") {
            const [valueInNum,unit ]= value.split(" ")
            console.log(parseFloat(valueInNum))
        }
    }
    getSpeedInMeterPerSecond("3 km")


    // never

   const throwError = (msg:string):never=>{
        throw new Error (msg)
    }
    throwError("mushkill")



}