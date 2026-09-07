class products {
    constructor(name,price){
        this.name=name,
        this.price=price
    }

displayproduct(){
    console.log(`prouct name: ${this.name}`);
     console.log(`prouct name: ${this.price}`);
}
}

const product1 = new products("shirt",200);
const product2 = new products("pants",300);

product1.displayproduct();
product2.displayproduct();