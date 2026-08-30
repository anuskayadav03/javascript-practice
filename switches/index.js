// let day =2;
// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break; 
//     case 5:
//         console.log("friday");
//         break;  
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;  
//     default:
//         console.log("not a day");   
// }


let score =99;
let grade;

switch(true){
    case score>=90:
        grade="A";
        break;
    case score>=80:
        grade="B";  
         break;
     case score>=70:
        grade="C";
         break;
    case score>=60:
        grade="D"; 
         break; 
     case score>=50:
        grade="E";
         break;
    case score<49:
        grade= "FAIL";
         break;           
}
console.log(grade);