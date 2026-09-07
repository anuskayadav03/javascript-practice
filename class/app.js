class products {
    constructor(name,price){
        this.name=name,
        this.price=price
    }

displayproduct(){
    console.log(`prouct name: ${this.name}`);
     console.log(`prouct name: ${this.price}`);
}
  calculateTotal(saleTax){
    return this.price +(this.price*saleTax);
  }
}
const saleTax =0.05;

const product1 = new products("shirt",200);
const product2 = new products("pants",300);

product1.displayproduct();
product2.displayproduct();

const total = product1.calculateTotal(saleTax);
console.log(`your total amount is ${total}`);

const total2 = product2.calculateTotal(saleTax);
console.log(`your total amount is ${total2}`);