// let username = "anushka yadav";

// let firstName = username.slice(0,7);
// let lastname = username.slice(8,13);

// let firstchar = username.slice(0,1);
// let lastchar = username.slice(12,13);
// let lastchar2 = username.slice(-1);

// console.log(firstName);
// console.log(lastname);
// console.log(firstchar);
// console.log(lastchar2);

// const fullname = "anuska yadav";
// let firstname = fullname.slice(0, fullname.indexOf(" "));
// let lastname = fullname.slice( fullname.indexOf(" ")+1);
// console.log(firstname);
// console.log(lastname);

const email = "anushka.ydv@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);
console.log(username);
console.log(extension);