const boxes=document.querySelectorAll(".checkbox");
const sliderLength=document.getElementById("slider");
const spanPasswordLenght=document.getElementById("password-length");
const generateButton=document.getElementById("generate-button");
const passwordArea=document.getElementById("password-box");
const chars={
    lowercase:"abcdefghijklmnopqrtuvwxyz",
    uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers:"0123456789",
    symbols:"!$%&/*|()=[]{}@#<>"
}

sliderLength.addEventListener("input", () => {
    spanPasswordLenght.innerText=sliderLength.value;
})

generateButton.addEventListener("click", () => {
    var possibleChars="";
    var finalPassword="";

    boxes.forEach(box => {
        if(box.checked){
            possibleChars+=chars[box.id];
        }
    })
    
    for(let i=0; i<sliderLength.value; i++){
        finalPassword+=possibleChars[Math.floor(Math.random()* possibleChars.length)];
    }
    passwordArea.value=finalPassword;
})