//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}
	get width(){
		return this.width;
	}
	get height(){
		return this.height;
	}
	getArea(){
		let ans=(this._width)*(this._height);
		return ans;
	}
}

class Square extends Animal {
	constructor(side){
		super();
		this.side=side;
		
	}
	getPerimeter(){
		return (this.side)*(this.side);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
