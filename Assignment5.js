const account = {
    accountName: "AnnaAndersson",
    firstName: "Anna",
    lastName: "Andersson",
    balance: 500000,
    password: "Banana", 
    attempts: 0, 
    maxAttempts: 3,


    getBalance() {
        return this.balance;

        //this function should display the total amount of the account to the user 
    },

    deposit(amount) {
        // this function should be able to deposit money onto the balance of the account 
        if (amount > 0) {
            this.balance += amount;
            return `Deposited: $${amount}. New balance: $${this.balance}`;
        } else {
            return `No amount is deposited`;
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

        if(this.attempts >= this.maxAttempts){ //This one checks if the account is locked.
            return "Account is locked due to too many filed attempts to login. Please contact you bank.";
        }
    
        if (accountName !== this.accountName) {
            this.attempts++;
            return this.accountError(`Wrong username! You have ${this.maxAttempts - this.attempts}more tries.`);
        }
        if (password !== this.password) {
            this.attempts++;
            return this.accountError(`Wrong password! You have ${this.maxAttempts - this.attempts}more tries.`);
        }
        if (this.attempts == 0){
        return "Login successful!";
        }
    },

    accountError(message) {
        // Handle and return error messages
        return `Error: ${message}`;
    },

    exit() {
        if (confirm("Are you sure you want to exit?")) {
            return `You have exited your account.`;
            this.password = null;
        } else {
            return `Exit canceled.`;
        }
    }


};


function atm(){
    let exit = false;
    let loggedIn = false;

    while (!loggedIn) {
        const accountName = prompt("Enter account name:");
        const password = prompt("Enter password:");
        
        const loginMessage = account.login(accountName, password);
        alert(loginMessage);
        
        // Check if login was successful
        if (loginMessage === "Login successful!") {
            loggedIn = true; // Set loggedIn to true to break the loop
        // } else {
        //    return "Login failed due to too many attempts" 
        // }
    }
}

    while (!exit){ //while loop that continues until the user successfully logs in.

    const choice = parseFloat ( //prompts the user to enter their account name and password and then calls the account.login, which checks the credentials and returns a message.
        prompt (
            "Select a choice: 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    );

    switch (choice) { 
        case 1: alert(`Your balance is $${account.getBalance()}`); //Balance
        break;

        case 2: 
        const depositAmount = parseFloat(prompt("Enter amount to deposit:")); //Prompt Deposit and calls account.deposit. Then returns with the deposited amount.
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