class BankAccount{
    constructor(name, balance){
        this.name= name;
        this.balance= balance;
    }

    deposit(amount){
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount){
        if(amount > this.balance){
            return "Insufficient balance";
        }
        this.balance -= amount;
        return this.balance;
    }

    getBalance(){
        return this.balance;
    }

    static bankInfo(){
        return "This is a secure banking system.";
    }
}

const acc1= new BankAccount("Spandan Kar", 10000);

console.log(acc1.deposit(5000));
console.log(acc1.withdraw(3000));
console.log(acc1.getBalance());
console.log(BankAccount.bankInfo());