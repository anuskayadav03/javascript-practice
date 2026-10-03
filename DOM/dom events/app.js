let btn = document.querySelector("#btn");
// btn.onclick = () =>{
//     console.log("HEADING 1");
// }

btn.addEventListener("click",(evt) =>{
    console.log("button was clicked");
    console.log(evt);
    console.log(evt.type);
});

btn.addEventListener("click",() =>{
    console.log("button was clicked2");
});

const handler3 = () =>{
    console.log("button was clicked3");
};

btn.addEventListener("click" , handler3 )

btn.addEventListener("click",() =>{
    console.log("button was clicked4");
});

btn.removeEventListener("click", () =>{
    console.log("click" , handler3)
})