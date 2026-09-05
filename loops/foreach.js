let number =[1,2,3,4,5,6];

number.forEach(double);
number.forEach(display);

function double(element,index,array){
    array[index] =element*2;
}
function display(elements){
    console.log(elements);
}