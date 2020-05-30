/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain null values
  It is decided that if there is a null value the program should exit
  - Add a check for null values, and if one exists, exit the program
  - Do not edit any of the existing code
*/

// ************ Data types **************
// Strings "Theo"
// Numbers 5
// Boolean  false true
// Array ["A", "b", "c"];
// Function function hello() { }
// ************** Special Data types **************
// null
// undefined

// var name = "Theo"; // name is variable, value "Theo", typeof String 
// name = 5;  // value 5, typeof Number;
// const names = ["Theo", "Mawanda", "Rares", 9, false, ["34", [5]]];
// an array of arrays is called 2D array

var pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [3, 0]];
function doesItIncludeNullValues(pair) { // [0, 3]
  return index===null; // [0, 3] === null --> false
}

// names.find(findTheo) --> "Theo";
// pairsByIndex.some(doesItInclude) --> true/false

if(pairsByIndex.some(doesItIncludeNullValues)) { 
  // return "stop";
  process.exit(1);
}
// If there is a null value in the array exit the program with the error code
// https://nodejs.org/api/process.html#process_process_exit_code
// process.exit(1);

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

var pairs = pairsByIndex.map(function(indexes) {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor]; 
});

console.log(pairs);
