
function blueTheme(){
let jumbotron=document.querySelector(".jumbotron");
jumbotron.style.backgroundColor="#588fbd";

let primaryBtn=document.querySelector(".btn.btn-primary.btn-lrg");
primaryBtn.style.backgroundColor="#ffa500";

let VolunteerBtn=document.querySelector(".btn.btn-secondary.btn-lrg");
VolunteerBtn.style.backgroundColor="black";
VolunteerBtn.style.color="white";
}


let theBlueButton=document.querySelector("#blueBtn");
theBlueButton.addEventListener("click",blueTheme)


function orangeTheme(){
    let jumbotron=document.querySelector(".jumbotron");
    jumbotron.style.backgroundColor="#f0ad4e";

    let primaryBtn=document.querySelector(".btn.btn-primary.btn-lrg");
    primaryBtn.style.backgroundColor="#5751fd";

    let VolunteerBtn=document.querySelector(".btn.btn-secondary.btn-lrg");
    VolunteerBtn.style.backgroundColor="#31b0d5";
    VolunteerBtn.style.color="white";
}

let theOrangeButton=document.querySelector("#orangeBtn");
theOrangeButton.addEventListener("click",orangeTheme)



function greenTheme(){
    let jumbotron=document.querySelector(".jumbotron");
    jumbotron.style.backgroundColor="#87ca8a";

    let primaryBtn=document.querySelector(".btn.btn-primary.btn-lrg");
    primaryBtn.style.backgroundColor="black";

    let VolunteerBtn=document.querySelector(".btn.btn-secondary.btn-lrg");
    VolunteerBtn.style.backgroundColor="#8c9c08";
    
}
let theGreenButton=document.querySelector("#greenBtn");
theGreenButton.addEventListener("click",greenTheme);





function checkIfFieldsAreValid(event) {
    event.preventDefault();
    let emailBox=document.querySelector("#exampleInputEmail1");
    let nameBox=document.querySelector("#exampleTextInput");
    let textBox=document.querySelector("#exampleTextarea");
    let isNameBoxValid = nameBox.checkValidity();
    let isEmailValid=emailBox.checkValidity();
    let isTextBoxValid=textBox.checkValidity();
    
    let isEmailInvalid=!isEmailValid; 
     let isNameBoxInValid=!isNameBoxValid;
     let isTextBoxInValid=!isTextBoxValid
    if (isEmailValid && isNameBoxValid && isTextBoxValid ){
      alert("Thank you for filling the form :)");      
    }
    if(isEmailInvalid) {
        emailBox.style.backgroundColor="red";
    }
    if(isNameBoxInValid) {
      nameBox.style.backgroundColor="red";
    }
    if(isTextBoxInValid)
      textBox.style.backgroundColor="red";
}

let submitBtn=document.querySelector("form .btn.btn-primary");
submitBtn.addEventListener("click",checkIfFieldsAreValid);