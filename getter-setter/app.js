class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
}

const rectangle = new Rectangle(-1000000000,"pizza");

console.log(rectangle);
console.log(rectangle.width);
console.log(rectangle.height);