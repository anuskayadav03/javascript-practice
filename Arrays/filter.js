let num =[1,2,3,4,5,6,7];

let evennums = num.filter(isEven);
console.log(evennums);

let oddnums = num.filter(isOdd);
console.log(oddnums);

function isEven(elements){
    return elements%2===0;
}

function isOdd(elements){
    return elements%2!==0;
}