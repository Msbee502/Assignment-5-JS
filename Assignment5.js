const account = {
    accountName: "AnnaAndersson",
    firstName: "Anna",
    lastName: "Andersson",
    balance: 500000,
    password: "Banana", 
    getbalance() {
        return this.balance;

        //this function should display the total amount of the account to the user 
    },

    deposit(amount) {
        // this function should be able to deposit money onto the balance of the account 
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("No amount is deposited");
        }

    },

    withdrawal(amount) {
        //this function should be able do withdrawal money from the balance of the account

        if (amount > this.balance) {
            return "No funds.";
        }
        else {
            this.balance -= amount;
            return `Withdrawal of $${amount} successful. New balance: $${this.balance}.`;
        }

    },

    // Login function to check account name and password with accountError function. 
    login(accountName, password) {
        
        if (accountName !== this.accountName) {
            return this.accountError("Login failed! You have two more tries.");
        }
        if (password !== this.password) {
            return this.accountError("Login failed! You have two more tries.");
        }
        return "Login successful!";
    },

    accountError(message) {
        // Handle and return error messages
        return `Error: ${message}`;
    },

    exit() {
        if (confirm("Are you sure you want to exit?")) {
            console.log("You have exited your account.");
            this.password = null;
        } else {
            console.log("Exit canceled.");
        }
    }


};

console.log(account.login("AnnaAndersson", "Banana"));
console.log(account.exit ());
console.log(account.deposit(500));