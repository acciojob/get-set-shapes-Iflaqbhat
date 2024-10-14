//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
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
		return this.side*4;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
