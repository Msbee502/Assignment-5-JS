const account = {
    accountName: "AnnaAndersson",
    firstName: "Anna",
    lastName: "Andersson",
    balance: 500000,
    password: "Banana", 


    getBalance() {
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


function atm(){
    let exit = false;

    while (!exit){

    const choice = parseFloat (
        prompt (
            "Select a choice: 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    );

    switch (choice) {
        case 1: alert(`Your balance is $${account.getBalance()}`);
        break;

        case 2: 
        const depositAmount = parseFloat(prompt("Enter amount to deposit:"));
        alert(account.deposit(depositAmount));
        break;


        case 3: const withdrawalAmount = parseFloat(prompt("Enter an amount to withdraw:"));
        alert(account.withdrawal(withdrawalAmount));
        break;

        case 4: alert(`Account name:${account.accountName}`);
        break;

        case 5: 
        account.exit ();
        exit = true;
        break;

        default: 
        alert("Invalid, Please try again.");
        break;

        }
    }
}

console.log(atm());
// console.log(account.exit ());
// console.log(account.deposit(1000));