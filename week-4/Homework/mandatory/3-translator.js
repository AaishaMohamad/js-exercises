const languages = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso"
};

/*
Write a 'greet' function that takes a parameter 'language' (always a string), 
and returns the greeting for that language - if it exists in your "languages" object.

It should default to English if the language is not in your object of languages, 
or in the event of an invalid input.
*/


function greet(language) { // language -> "GERMAN"
const languageLowerCased = language.toLowerCase(); // key --> german
  var includeLan=languages.hasOwnProperty(languageLowerCased); // includeLan --> true
   

  if (includeLan) {
    return languages[languageLowerCased]; // [] brackets
  }
  
  return languages.english; // dot notation . languages["english"];
}

console.log("1: ", greet("irish"), "=== Failte");
console.log("2: ", greet("GERMAN"), "=== Willkommen");
console.log("3: ", greet("greek"), "=== Welcome");
console.log("4: ", greet("blalal"), "=== Welcome");
console.log("5: ", greet("FLEMISH"), "=== Welgekomen");
console.log("6: ", greet("Danish"), "=== Velkomst"); // "Danish".toLowerCase() -> "danish"

/*
Test your function works correctly calling it inside a console.log(), for each one of these cases:

1. pass it a valid lowercase language

For example: console.log(greet("irish"));

2. pass it a valid uppercase language
3. pass it a language that doesn't exist in the object
4. pass it an invalid string (something that is not even a language)

*/
