
// hello(bye);

// function hello(callback){
//     console.log("hello!");
//     callback();
// }

// function bye(){
//     console.log("good bye!");
// }

sum(display,1,2);

function sum(callback ,x,y){
    let result = x+y;
    callback(result);
}
function display(result){
    console.log(result);
}