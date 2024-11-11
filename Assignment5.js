const account = { //Object with account details
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
        // With this function the user can deposit money onto the balance of the account. It has two returns, 
        //if user fills in an amount that is larger than 0, the if-statement returns how much user has deposited and the new balance. 
        //If User fills in 0 or something else the else-statement returns No amount deposited.
        if (amount > 0) {
            this.balance += amount;
            return `Deposited: $${amount}. New balance: $${this.balance}`;
        } else {
            return `No amount is deposited`;
        }

    },

    withdrawal(amount) {
        //With this function the user can withdrawal money from the account and the new balance shows up on the prompt. 
        //If user tries to withdrawal more money then the balance the if statement returns "No funds"
        //If user do a withdrawal that is less or the same as balance the else-statement returns "Withdrawal successful.."

        if (amount > this.balance) {
            return "No funds.";
        }
        else {
            this.balance -= amount;
            return `Withdrawal of $${amount} successful. New balance: $${this.balance}.`;
        }

    },

    // Login function to check account name and password. The user has 3 tries to login. After 3 tries with wrong login details the Accounterror function will execute. 
    login(accountName, password) {

        if(this.attempts >= this.maxAttempts){ //Checks if the account is locked if the user has tried to login more times than maxAttempts.
            return "Account is locked due to too many filed attempts to login. Please contact you bank.";
        }
    
        if (accountName !== this.accountName) { //Prompt that asks for Username/Accountname and returns Wrong Username if user fills in wrong usernam. 
            this.attempts++;
            return this.accountError(`Wrong username! You have ${this.maxAttempts - this.attempts}more tries.`);
        }
        if (password !== this.password) { //Prompt that asks for password and returns "Wrong password" if user fills in wrong password.
            this.attempts++;
            return this.accountError(`Wrong password! You have ${this.maxAttempts - this.attempts}more tries.`);
        }
        if (this.attempts == 0){ //executes when user have filled in correct username and password
        return "Login successful!";
        }
    },

    accountError(message) {
        // Handle and return error messages
        return `Error: ${message}`;
    },

    exit() { //Exit function that asks the user if they want to exit. If they don't, they click no and the else-statement returns with Exit cancelled.
        if (confirm("Are you sure you want to exit?")) { //Prompts the user and asks if user wants to exit
            this.password = null; //This line sets the password property of the current object to null. 
            return `You have exited your account.`;
        
        } else {
            return `Exit cancelled.`; 
        }
    }


};


function atm(){ //ATM-function that first checks the login
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

    const choice = parseFloat ( //prompts the user to enter their account name and password and then calls the account.login, 
        //which checks the credentials and returns a message. When logged in is true, a prompt with the following choices shows.
        prompt (
            "Select a choice: 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    );

    switch (choice) { //Switch statement that perform different actions based on different conditions.

        case 1: alert(`Your balance is $${account.getBalance()}`); //Action that calls account balance
        break;

        case 2: 
        const depositAmount = parseFloat(prompt("Enter amount to deposit:")); //Action that calls deposit function
        alert(account.deposit(depositAmount));
        break;


        case 3: const withdrawalAmount = parseFloat(prompt("Enter an amount to withdraw:")); //Action that calls withdrawal function
        alert(account.withdrawal(withdrawalAmount));
        break;

        case 4: alert(`Account name:${account.accountName}`); //Calls account.account name so user can see it in prompt
        break;

        case 5: 
        account.exit (); //calls exit function
        exit = true;
        break;

        default: 
        alert("Invalid, Please try again."); //Action that shows if if user tries to use invalid choices
        break;

        }
    }
}

console.log(atm());
// console.log(account.exit ());
// console.log(account.deposit(1000));