const checkbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const submit = document.getElementById("submit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

submit.onclick = function(){
    if(checkbox.checked){
         subresult.textContent = `you are subscribed!`;
    }
    else{
        subresult.textContent = `you are not subscribed!`;
    }

    if(visaBtn.checked){
        paymentresult.textContent ="you are paying with visa";
    }
    else if(mastercard.checked){
        paymentresult.textContent ="you are paying with master card";
    }
    else if(paypal.checked){
        paymentresult.textContent ="you are paying with paypal";
    }
    else{
        paymentresult.textContent="you must select a payment type !";
    }
    
}