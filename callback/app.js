
// hello(bye);

// function hello(callback){
//     console.log("hello!");
//     callback();
// }

// function bye(){
//     console.log("good bye!");
// }

sum(displaypage,1,2);

function sum(callback ,x,y){
    let result = x+y;
    callback(result);
}
function display(result){
    console.log(result);
}

function displaypage(result){
    document.getElementById("myh1").textContent = result;
}