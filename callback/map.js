const number =[1,2,3,4,5];

const squares = number.map(square);
console.log(squares);

const cubes = number.map(cube);
console.log(cubes);

function square(elements){
   return Math.pow(elements,2);
}
function cube(elements){
   return Math.pow(elements,3);
}