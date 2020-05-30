/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];
function findLongNameThatStartsWithA (name) {
  return name.startsWith("A") && name.length > 7;
}

var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);


console.log(longNameThatStartsWithA);

// function helloThere(name, age) { // definition
//   console.log('Hello ' + name + 'I am ' + age + ' years old');
// }

// function goodBye(name, fn) { // Rares, helloThere
//   // I am executing
//   console.log("name:", name); // "name: Rares"
//   fn(name, 55);  // helloThere("Rares", 55)
// }

// goodBye("Rares", helloThere);

// // helloThere("Theo", 33); // call/execution
// // helloThere("Mawanda", 22); // call/execution


/* EXPECTED OUTPUT */
// "Alexandra"
