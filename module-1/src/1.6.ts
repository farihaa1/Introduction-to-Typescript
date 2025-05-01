{
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }
    add(2, 3)

    const arrowFunc = (num1: number, num2: number = 0): number => num1 + num2

    // object -->function -->method
    const poorUser = {
        name: "Fariha",
        balance: 0,
        addBalance(balance: number): number {
            return this.balance + balance
        }
    }

    const arr: number[] = [1, 4, 10]

    const newArray = arr.map((elem: number): number => elem * elem,
    );
}