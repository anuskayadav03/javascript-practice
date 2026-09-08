class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }

    set width(newWidth){
        if(newWidth>0){
            this._width = newWidth;
        }
        else{
            console.log("width must be positive number");
        }
    }
     set height(newheight){
        if(newheight>0){
            this._height = newheight;
        }
        else{
            console.log("height must be positive number");
        }
    }
}

const rectangle = new Rectangle(-1000000000,"pizza");

console.log(rectangle);
console.log(rectangle.width);
console.log(rectangle.height);