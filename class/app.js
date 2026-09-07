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

const product1 = new products("shirt",20);

product1.displayproduct();