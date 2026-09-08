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

    get width(){
        return this._width;
    }
get height(){
        return this._height;
    }
}

const rectangle = new Rectangle(1000000000,80000000);

console.log(rectangle);
console.log(rectangle.width);
console.log(rectangle.height);