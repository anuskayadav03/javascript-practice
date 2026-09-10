//create element
const newH1 = document.createElement("h1");

//add attribute/properties
newH1.textContent ="i like pizza";
newH1.id ="myH1";
newH1.style.color ="tomato";
newH1.style.textAlign="center";

//append element to dom
document.body.prepend(newH1);
document.getElementById("box1").append(newH1);

//remove html element