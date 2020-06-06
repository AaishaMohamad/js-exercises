/* Challenge 1: Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/

let writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true,
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true,
  },
];

function information (object){
  const info= `Hi, my name is ${object.firstName} ${object.lastName}. I am ${object.age} years old, and work as a ${object.occupation}.`
  return info;
}
console.log (writers.map(information));
// const calling=information(writers[0]);
// console.log(calling);
/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/
function aliveOrNah(object){
  if(object.alive === true){
     return object.firstName;
 }
}
console.log(writers.filter(aliveOrNah));

