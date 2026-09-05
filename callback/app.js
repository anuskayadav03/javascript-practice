
hello(bye);

function hello(callback){
    console.log("hello!");
    callback();
}

function bye(){
    console.log("good bye!");
}