// const max=50;
// const min=1;

// let randomNum = Math.floor(Math.random() * (max - min))+1;
// console.log(randomNum);

const myButton = document.getElementById("myButton");
const label = document.getElementById("label");
const max=6;
const min=1;
let randomNum;

myButton.onclick =function(){
    randomNum = Math.floor(Math.random() *max)+min;
    label.textContent = `the num is : ${randomNum}`;
}
