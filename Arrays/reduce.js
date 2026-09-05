let num =[1,2,3,4,5,6,7];

const total = num.reduce(sum);
console.log(total);

function sum(accumulator,elements){
    return accumulator+elements;
}