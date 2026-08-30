// let age=13;
// if(age>=25){
//     console.log("you are old enough to enter the site");
// }
// else{
//     console.log("you must be 18+");
// }

// let isStudent=false;
// if(isStudent){
//     console.log("you are a student");
// }
// else{
//     console.log("you are not a student");
// }

// let age=25;
// let hasLicence=true;

// if(age>=18){
//     console.log("you are old enough to drive");

//    if(hasLicence){
//     console.log("you have licence");
//    }
//    else{
//     console.log("you do not have a licence");
//    }
// }
// else{
//     console.log("you must be 18+ to have a license");
// }


const text = document.getElementById("myage");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

let age;
submit.onclick = function(){

age = text.value;
age = Number(age);

if(age>=100){
    result.textContent = "your age is above 99";

}
else if(age>=18){
    result.textContent = "your age is above 18";
}
else if(age==0){
    result.textContent = "your age is 0";
}
else{
    result.textContent = "you must be 18+";
   
}
}
