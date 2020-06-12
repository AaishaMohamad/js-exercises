/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function getNameAndJobFromTheObject(object){
let getNAme=object.name;
let getJob=object.job;
let theFirstHeading=document.createElement("h1");
theFirstHeading.innerText=getNAme;
let content = document.querySelector("#content");
  content.appendChild(theFirstHeading);
  let secondHeading=document.createElement("h2");
  secondHeading.innerText=getJob;
  content.appendChild(secondHeading);
}
function exerciseOne(arrayOfPeople) {
 return arrayOfPeople.forEach(getNameAndJobFromTheObject);
    
  };
  


/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function creatingListItems(Value){
  let makeItAListItem=document.createElement("li");
  makeItAListItem.innerText=Value;
  document.getElementById("shoppingList").appendChild(makeItAListItem);
  // unorderedList.appendChild(makeItAListItem);


}
function exerciseTwo(shopping) {
  let unorderedList=document.createElement("ul");
  unorderedList.setAttribute("id","shoppingList")
  let content = document.querySelector("#content");
  content.appendChild(unorderedList);
return shopping.forEach(creatingListItems);
};
 


  //Write your code in here


/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function aSingleBook(book){
  let aParagraph=document.createElement("p");
  aParagraph.innerText=book.title + book.author;
  let bookCover=document.createElement("img");
  bookCover.alt="bookCover";
  let makeItAListItem=document.createElement("li");
  makeItAListItem.style.display="flex";
  makeItAListItem.style.flexDirection="column"
  makeItAListItem.innerText=aParagraph;
 makeItAListItem.appendChild(aParagraph);
 makeItAListItem.appendChild(bookCover);
 document.getElementById("favBooks").appendChild(makeItAListItem);
 if(book.title==="The Design of Everyday Things"){
  bookCover.src="https://images-na.ssl-images-amazon.com/images/I/41bWcNdTGmL._SX330_BO1,204,203,200_.jpg";
 }else if(book.title==="The Most Human Human"){
  bookCover.src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg";
 }else if (book.title==="The Pragmatic Programmer"){
 bookCover.src="https://images-na.ssl-images-amazon.com/images/I/418M2053aNL.jpg";
} 
if(book.alreadyRead===true) {
  return makeItAListItem.style.backgroundColor="green";
}
return makeItAListItem.style.backgroundColor="red";
}


function exerciseThree(books) {
  let unorderedList=document.createElement("ul");
  unorderedList.setAttribute("id","favBooks");
  unorderedList.style.display="flex";
  unorderedList.style.justifyContent="space-around";
  document.body.appendChild(unorderedList);
   return books.forEach(aSingleBook);
  //Write your code in here
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
