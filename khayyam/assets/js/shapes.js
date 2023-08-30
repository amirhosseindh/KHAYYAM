class Square {
	_squareLength;

	constructor(length) {
		this._squareLength = length;
	}

	SquareEnv = () => {
		return this._squareLength * 4;
	};
	SquareArea = () => {
		return Math.pow(this._squareLength, 2);
	};
}
class Rectangle {
	_rectangleLength;
	_rectangleWidth;

	constructor(length, width) {
		this._rectangleLength = length;
		this._rectangleWidth = width;
	}

	RectangleEnv = () => {
		return (this._rectangleLength + this._rectangleWidth) * 2;
	};
	RectangleArea = () => {
		return this._rectangleLength * this._rectangleWidth;
	};
}
class EquilateralTriangle {
	_equilateralTriangleLength;
	_equilateralTriangleWidth;
	_equilateralTriangleHeight;

	constructor(length, width, height) {
		this._equilateralTriangleLength = length;
		this._equilateralTriangleWidth = width;
		this._equilateralTriangleHeight = height;
	}

	EquilateralTriangleEnv = () => {
		return (
			this._equilateralTriangleLength +
			this._equilateralTriangleWidth +
			this._equilateralTriangleWidth
		);
	};
	EquilateralTriangleArea = () => {
		return (
			(this._equilateralTriangleLength * this._equilateralTriangleHeight) / 2
		);
	};
}
class IsoscelesTriangle {
	_isoscelesTriangleLength;
	_isoscelesTriangleHeight;

	constructor(length, height) {
		this._isoscelesTriangleLength = length;
		this._isoscelesTriangleHeight = height;
	}

	IsoscelesTriangleEnv = () => {
		return this._isoscelesTriangleLength * 3;
	};

	IsoscelesTriangleArea = () => {
		return (this._isoscelesTriangleLength * this._isoscelesTriangleHeight) / 2;
	};
}
class RightTriangle {
	_rightTriangleLength;
	_rightTriangleWidth;
	_rightTriangleHeight;

	constructor(length, width, height) {
		this._rightTriangleLength = length;
		this._rightTriangleWidth = width;
		this._rightTriangleHeight = height;
	}

	RightTriangleEnv = () => {
		return (
			this._rightTriangleLength +
			this._rightTriangleWidth +
			this._rightTriangleHeight
		);
	};

	RightTriangleArea = () => {
		return (this._rightTriangleLength * this._rightTriangleHeight) / 2;
	};
}
class Circle {
	_circleRadius;

	constructor(radius) {
		this._circleRadius = radius;
	}

	CircleEnv = () => {
		return this._circleRadius * 2 * Math.PI.toFixed(2);
	};

	CircleArea = () => {
		return Math.pow(this._circleRadius, 2) * Math.PI.toFixed(2);
	};
}
class Semicircular {
	_semicircularRadius;

	constructor(radius) {
		this._semicircularRadius = radius;
	}

	SemicircularEnv = () => {
		return (this._semicircularRadius * 2 * Math.PI.toFixed(2)) / 2;
	};

	SemicircularArea = () => {
		return (Math.pow(this._semicircularRadius, 2) * Math.PI.toFixed(2)) / 2;
	};
}
class Parallelogram {
	_parallelogramLength;
	_parallelogramWidth;
	_parallelogramHeight;

	constructor(length, width, height) {
		this._parallelogramLength = length;
		this._parallelogramWidth = width;
		this._parallelogramHeight = height;
	}

	ParallelogramEnv = () => {
		return (this._parallelogramLength + this._parallelogramWidth) * 2;
	};

	ParallelogramArea = () => {
		return this._parallelogramLength * this._parallelogramHeight;
	};
}

export default {
	Square,
	Rectangle,
	EquilateralTriangle,
	IsoscelesTriangle,
	RightTriangle,
	Circle,
	Semicircular,
	Parallelogram,
};
