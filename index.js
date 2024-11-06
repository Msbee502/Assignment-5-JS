// const country = {
//     countryName: "Sweden",
//     capital: "Stockholm", 
//     population: 9000000,
// };

// country.continent = "Europe";
// country.landscape = "Skåne";
// country.democracy = true;
// console.log(country.democracy)

// const person = {
//     firstName: "John",
//     lastName: "Smith",
//     age: 25,
//     Employed: false,
//     sayHello() {
//         console.log("Hello my name is John");
//     }
// };


// person.sayHello();

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName() {
//       return this.firstName + " " + this.lastName + " " + this.id;
//     }
//   };

//   //This kallar på objektet.
//   console.log(person.fullName());

//   //Går även göra såhär: 

//   const människa = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
//   };
  
// console.log (människa.firstname + " is " + människa.age + " years old.");

// const hej = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
  
  
//   // Add a Method
//   name() {
//     return this.firstName + " " + this.lastName;
//   }
//   };

  //Skriv en mening
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 35,
    id: 5566,
    isEmployed: true,
    sayHello() {
      return `Hello, my name is ${this.firstName} ${this.lastName}`;
    },
    printBio (){
        const sayHello = this.sayHello();
        const employed = this.isEmployed ? "working" : "not working";
        console.log(`${sayHello} and I am ${this.age} and ${employed}`);
    }
  };

  person.printBio();




