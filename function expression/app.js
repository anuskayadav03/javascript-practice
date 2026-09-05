// const hello = function(){
//     console.log("hello");
// }

// hello();

// setTimeout(() => {
//     console.log("hello");
// }, 3000);

const numbers =[1,2,3,4,5,6,7];

const squares =numbers.map(function square(elements){
    return Math.pow(elements,2);
});

console.log(squares);
