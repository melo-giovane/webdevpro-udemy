// Task 1: Encapsulation Using Getters and Setters

// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

class BankAccount {
  constructor(balance) {
    if (balance < 0) {
      throw new Error("Balance cannot be negative");
    } else {
      this._balance = balance;
    }
  }

  get balance() {
    return this._balance;
  }

  set balance(newBalance) {
    if (newBalance < 0) {
      throw new Error("Balance cannot be negative");
    }
  }

  deposit(amount) {
    this._balance += amount;
    console.log(`New deposit of ${amount}`);
  }
  withdraw(amount) {
    this._balance -= amount;
    console.log(`New withdraw of ${amount}`);
  }
}

try {
  const account = new BankAccount(100);
  console.log(account.balance); // Isso deve retornar 100, se tudo estiver correto.
} catch (e) {
  console.error(e.message);
}