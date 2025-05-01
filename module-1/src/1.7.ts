{
    // spread and rest operator and destructuring 

    const bros1: string[] = ['fariha', 'riya', 'sathi']
    const bros2: string[] = ['mir', 'firoz', 'mizan']

    bros1.push(...bros2) //spread operator

    const mentors = {
        typescript: "mezba",
        redux: 'mir',
        dbms: 'mizan'
    }

    const mentors2 = {
        prisma: 'firoz',
        next: 'tanmay',
    }

    const mentorList = {
        ...mentors, ...mentors2
    }

    // rest operator
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => friend)
    }
    greetFriends("my", "ty", "sy", "uy")
}