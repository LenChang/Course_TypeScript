let bankAccount: bankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
}

let myself: { name: string, bankAccount: bankAccount, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

// Put it on the end or top isn't matter, it's just a supported tool. but suggest you put it into the top that you can read it easily.
type bankAccount = { money: number, deposit: (arg: number) => void }