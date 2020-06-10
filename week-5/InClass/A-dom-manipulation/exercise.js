/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
  

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
console.log(document.querySelectorAll("p"));
     
console.log(document.querySelector(".site-header"));

console.log(document.querySelector("#jumbotron-text"));

console.log(document.querySelectorAll(".primary-content p"))
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let toAlert=document.querySelector("#alertBtn");

toAlert.addEventListener("click", thankUser);

function thankUser(){
    alert("thanks for visiting bike for refugees");
    toAlert.style.backgroundColor="purple";
}
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeBackgroundColor=document.querySelector("#bgrChangeBtn");
changeBackgroundColor.addEventListener("click", changeIt);

function changeIt(){
let bodycolor= document.querySelector("body");
bodycolor.style.backgroundColor="pink";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let textbutton= document.querySelector("#addTextBtn");
textbutton.addEventListener("click", newParagraph);

function newParagraph(){
    let newpara= document.createElement("p");
    newpara.innerText="Read more below";

    let theParent=document.querySelector(".buttons");
    theParent.appendChild(newpara);
}


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let largebutton=document.querySelector("#largerLinksBtn");
largebutton.addEventListener("click",changeLinks);
// console.log(largebutton);

function changeLinks(){
     let theLinks= document.querySelectorAll(".articles a");
     theLinks.forEach(makeLinkLarger);
}
function makeLinkLarger(theLink){
theLink.style.fontSize= "larger";
}










/*Task 6
======

Using JavaScript, create an unordered list under the "Add" button.
When the "Add" button is pressed, get the value of the text box on its left, and add it to the list you created above.
*/

let theAddbutton=document.querySelector("#addArticleBtn");
theAddbutton.addEventListener("click",createAnUnorderedList);

function createAnUnorderedList(){
    let unorderedList=document.createElement("ul");
    var parentOfTheAddButton=document.querySelector("#addArticleBtn").parentElement;
    parentOfTheAddButton.appendChild(unorderedList);
    let listElement=document.createElement("li");
    let userInput= document.querySelector(".addArticle").value;
     listElement.innerText=userInput;
    unorderedList.appendChild(listElement);
    let inputSpace=document.querySelector(".addArticle");
  
}

window.addEventListener("load",function(){
    console.log('page is fully loaded');
  });