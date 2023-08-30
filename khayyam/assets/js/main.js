import Shapes from "./shapes.js";

const shape = document.querySelectorAll(".shape");
const shapeClass = [
	"squareSelect",
	"rectangleSelect",
	"equilateralTriangleSelect",
	"isoscelesTriangleSelect",
	"rightTriangleSelect",
	"circleSelect",
	"semicircularSelect",
	"parallelogramSelect",
];
const shapeSrc = [
	"./assets/images/square.png",
	"./assets/images/rectangle.png",
	"./assets/images/equilateralTriangle.png",
	"./assets/images/isoscelesTriangle.png",
	"./assets/images/rightTriangle.png",
	"./assets/images/circle.png",
	"./assets/images/semicircular.png",
	"./assets/images/parallelogram.png",
];
let shapeSelect = document.getElementById("shapeSelect");

const inputsClass = [
	"square_inputs",
	"rectangle_inputs",
	"equilateralTriangle_inputs",
	"isoscelesTriangle_inputs",
	"rightTriangle_inputs",
	"circle_inputs",
	"semicircular_inputs",
	"parallelogram_inputs",
];
let inputs = document.getElementById("inputs");

let formula = document.querySelector(".formula");

let setSquareFormula = () => {
	if (
		shapeSelect.classList.value === shapeClass[0] &&
		environmentRadio.checked === true
	) {
		formula.innerHTML = "X &times 4";
	} else if (
		shapeSelect.classList.value === shapeClass[0] &&
		areaRadio.checked === true
	) {
		formula.innerHTML = "X &times X";
	}
};
let setRectangleFormula = () => {
	if (
		shapeSelect.classList.value === shapeClass[1] &&
		environmentRadio.checked === true
	) {
		formula.innerHTML = "2 &times (X + Y)";
	} else if (
		shapeSelect.classList.value === shapeClass[1] &&
		areaRadio.checked === true
	) {
		formula.innerHTML = "X &times Y";
	}
};
let setEquilateralTriangleFormula = () => {
	if (
		shapeSelect.classList.value === shapeClass[2] &&
		environmentRadio.checked === true
	) {
		formula.innerHTML = "X + (Y &times 2)";
	} else if (
		shapeSelect.classList.value === shapeClass[2] &&
		areaRadio.checked === true
	) {
		formula.innerHTML = "2 &divide (X &times Z)";
	}
};
let setIsoscelesTriangleFormula = () => {
	if (
		shapeSelect.classList.value === shapeClass[3] &&
		environmentRadio.checked === true
	) {
		formula.innerHTML = "3 &times X";
	} else if (
		shapeSelect.classList.value === shapeClass[3] &&
		areaRadio.checked === true
	) {
		formula.innerHTML = "2 &divide (X &times Z)";
	}
};
let setRightTriangleFormula = () => {
	if (
		shapeSelect.classList.value === shapeClass[4] &&
		environmentRadio.checked === true
	) {
		formula.innerHTML = "X + Y + Z";
	} else if (
		shapeSelect.classList.value === shapeClass[4] &&
		areaRadio.checked === true
	) {
		formula.innerHTML = "2 &divide (X &times Z)";
	}
};
let setCircleFormula = () => {
	if (
		shapeSelect.classList.value === shapeClass[5] &&
		environmentRadio.checked === true
	) {
		formula.innerHTML = "&#960 &times (X + X)";
	} else if (
		shapeSelect.classList.value === shapeClass[5] &&
		areaRadio.checked === true
	) {
		formula.innerHTML = "X &times X &times &#960";
	}
};
let setSemicircularFormula = () => {
	if (
		shapeSelect.classList.value === shapeClass[6] &&
		environmentRadio.checked === true
	) {
		formula.innerHTML = "[&#960 &times (X + X)] &divide 2";
	} else if (
		shapeSelect.classList.value === shapeClass[6] &&
		areaRadio.checked === true
	) {
		formula.innerHTML = "(X &times X &times &#960) &divide 2";
	}
};
let setParallelogramFormula = () => {
	if (
		shapeSelect.classList.value === shapeClass[7] &&
		environmentRadio.checked === true
	) {
		formula.innerHTML = "2 &times (X + Y)";
	} else if (
		shapeSelect.classList.value === shapeClass[7] &&
		areaRadio.checked === true
	) {
		formula.innerHTML = "X &times Z";
	}
};

for (let i = 0; i < shape.length; i++) {
	shape[i].addEventListener("click", () => {
		shapeSelect.src = shapeSrc[i];
		shapeSelect.setAttribute("class", shapeClass[i]);

		inputs.setAttribute("class", inputsClass[i]);

		setSquareFormula();
		setRectangleFormula();
		setEquilateralTriangleFormula();
		setIsoscelesTriangleFormula();
		setRightTriangleFormula();
		setCircleFormula();
		setSemicircularFormula();
		setParallelogramFormula();

		lengthField.value = 0;
		widthField.value = 0;
		heightField.value = 0;
		resultFinal.innerHTML = 0;
	});
}

let variablesFields = document.querySelectorAll("input[type=number]");

for (let i = 0; i < variablesFields.length; i++) {
	variablesFields[i].addEventListener("change", () => {
		if (variablesFields[i].value === "") {
			variablesFields[i].value = 0;
		}
	});
}

let environmentBtn = document.querySelector(".environment_btn");
let areaBtn = document.querySelector(".area_btn");

environmentBtn.addEventListener("click", () => {
	lengthField.value = 0;
	widthField.value = 0;
	heightField.value = 0;
	resultFinal.innerHTML = 0;

	if (shapeSelect.classList.value === shapeClass[0]) {
		formula.innerHTML = "X &times 4";
	} else if (
		shapeSelect.classList.value === shapeClass[1] ||
		shapeSelect.classList.value === shapeClass[7]
	) {
		formula.innerHTML = "2 &times (X + Y)";
	} else if (shapeSelect.classList.value === shapeClass[2]) {
		formula.innerHTML = "X + (Y &times 2)";
	} else if (shapeSelect.classList.value === shapeClass[3]) {
		formula.innerHTML = "3 &times X";
	} else if (shapeSelect.classList.value === shapeClass[4]) {
		formula.innerHTML = "X + Y + Z";
	} else if (shapeSelect.classList.value === shapeClass[5]) {
		formula.innerHTML = "&#960 &times (X + X)";
	} else if (shapeSelect.classList.value === shapeClass[6]) {
		formula.innerHTML = "[&#960 &times (X + X)] &divide 2";
	}
});
areaBtn.addEventListener("click", () => {
	lengthField.value = 0;
	widthField.value = 0;
	heightField.value = 0;
	resultFinal.innerHTML = 0;

	if (shapeSelect.classList.value === shapeClass[0]) {
		formula.innerHTML = "X &times X";
	} else if (shapeSelect.classList.value === shapeClass[1]) {
		formula.innerHTML = "X &times Y";
	} else if (
		shapeSelect.classList.value === shapeClass[2] ||
		shapeSelect.classList.value === shapeClass[3] ||
		shapeSelect.classList.value === shapeClass[4]
	) {
		formula.innerHTML = "2 &divide (X &times Z)";
	} else if (shapeSelect.classList.value === shapeClass[5]) {
		formula.innerHTML = "X &times X &times &#960";
	} else if (shapeSelect.classList.value === shapeClass[6]) {
		formula.innerHTML = "(X &times X &times &#960) &divide 2";
	} else if (shapeSelect.classList.value === shapeClass[7]) {
		formula.innerHTML = "X &times Z";
	}
});

let resultBtn = document.querySelector(".result_btn");
resultBtn.addEventListener("click", () => {
	if (shapeSelect.classList.value === shapeClass[0]) {
		square();
	} else if (shapeSelect.classList.value === shapeClass[1]) {
		rectangle();
	} else if (shapeSelect.classList.value === shapeClass[2]) {
		equilateralTriangle();
	} else if (shapeSelect.classList.value === shapeClass[3]) {
		isoscelesTriangle();
	} else if (shapeSelect.classList.value === shapeClass[4]) {
		rightTriangle();
	} else if (shapeSelect.classList.value === shapeClass[5]) {
		circle();
	} else if (shapeSelect.classList.value === shapeClass[6]) {
		semicircular();
	} else if (shapeSelect.classList.value === shapeClass[7]) {
		parallelogram();
	}
});

let environmentRadio = document.getElementById("environmentRadioBtn");
let areaRadio = document.getElementById("areaRadioBtn");

let lengthField = document.getElementById("length_field");
let widthField = document.getElementById("width_field");
let heightField = document.getElementById("height_field");

let squareInstance = new Shapes.Square();
let rectangleInstance = new Shapes.Rectangle();
let equilateralTriangleInstance = new Shapes.EquilateralTriangle();
let isoscelesTriangleInstance = new Shapes.IsoscelesTriangle();
let rightTriangleInstance = new Shapes.RightTriangle();
let circleInstance = new Shapes.Circle();
let semicircularInstance = new Shapes.Semicircular();
let parallelogramInstance = new Shapes.Parallelogram();

let resultFinal = document.querySelector(".result_final");

let square = () => {
	if (
		shapeSelect.classList.value === shapeClass[0] &&
		environmentRadio.checked === true
	) {
		squareInstance._squareLength = parseFloat(lengthField.value);
		resultFinal.innerHTML = squareInstance.SquareEnv();
	} else {
		squareInstance._squareLength = parseFloat(lengthField.value);
		resultFinal.innerHTML = squareInstance.SquareArea();
	}
};
let rectangle = () => {
	if (
		shapeSelect.classList.value === shapeClass[1] &&
		environmentRadio.checked === true
	) {
		rectangleInstance._rectangleLength = parseFloat(lengthField.value);
		rectangleInstance._rectangleWidth = parseFloat(widthField.value);
		resultFinal.innerHTML = rectangleInstance.RectangleEnv();
	} else {
		rectangleInstance._rectangleLength = parseFloat(lengthField.value);
		rectangleInstance._rectangleWidth = parseFloat(widthField.value);
		resultFinal.innerHTML = rectangleInstance.RectangleArea();
	}
};
let equilateralTriangle = () => {
	if (
		shapeSelect.classList.value === shapeClass[2] &&
		environmentRadio.checked === true
	) {
		equilateralTriangleInstance._equilateralTriangleLength = parseFloat(
			lengthField.value
		);
		equilateralTriangleInstance._equilateralTriangleWidth = parseFloat(
			widthField.value
		);
		resultFinal.innerHTML =
			equilateralTriangleInstance.EquilateralTriangleEnv();
	} else {
		equilateralTriangleInstance._equilateralTriangleLength = parseFloat(
			lengthField.value
		);
		equilateralTriangleInstance._equilateralTriangleHeight = parseFloat(
			heightField.value
		);
		resultFinal.innerHTML =
			equilateralTriangleInstance.EquilateralTriangleArea();
	}
};
let isoscelesTriangle = () => {
	if (
		shapeSelect.classList.value === shapeClass[3] &&
		environmentRadio.checked === true
	) {
		isoscelesTriangleInstance._isoscelesTriangleLength = parseFloat(
			lengthField.value
		);
		resultFinal.innerHTML = isoscelesTriangleInstance.IsoscelesTriangleEnv();
	} else {
		isoscelesTriangleInstance._isoscelesTriangleLength = parseFloat(
			lengthField.value
		);
		isoscelesTriangleInstance._isoscelesTriangleHeight = parseFloat(
			heightField.value
		);
		resultFinal.innerHTML = isoscelesTriangleInstance.IsoscelesTriangleArea();
	}
};
let rightTriangle = () => {
	if (
		shapeSelect.classList.value === shapeClass[4] &&
		environmentRadio.checked === true
	) {
		rightTriangleInstance._rightTriangleLength = parseFloat(lengthField.value);
		rightTriangleInstance._rightTriangleWidth = parseFloat(widthField.value);
		rightTriangleInstance._rightTriangleHeight = parseFloat(heightField.value);
		resultFinal.innerHTML = rightTriangleInstance.RightTriangleEnv();
	} else {
		rightTriangleInstance._rightTriangleLength = parseFloat(lengthField.value);
		rightTriangleInstance._rightTriangleHeight = parseFloat(heightField.value);
		resultFinal.innerHTML = rightTriangleInstance.RightTriangleArea();
	}
};
let circle = () => {
	if (
		shapeSelect.classList.value === shapeClass[5] &&
		environmentRadio.checked === true
	) {
		circleInstance._circleRadius = parseFloat(lengthField.value);
		resultFinal.innerHTML = circleInstance.CircleEnv();
	} else {
		circleInstance._circleRadius = parseFloat(lengthField.value);
		resultFinal.innerHTML = circleInstance.CircleArea();
	}
};
let semicircular = () => {
	if (
		shapeSelect.classList.value === shapeClass[6] &&
		environmentRadio.checked === true
	) {
		semicircularInstance._semicircularRadius = parseFloat(lengthField.value);
		resultFinal.innerHTML = semicircularInstance.SemicircularEnv();
	} else {
		semicircularInstance._semicircularRadius = parseFloat(lengthField.value);
		resultFinal.innerHTML = semicircularInstance.SemicircularArea();
	}
};
let parallelogram = () => {
	if (
		shapeSelect.classList.value === shapeClass[7] &&
		environmentRadio.checked === true
	) {
		parallelogramInstance._parallelogramLength = parseFloat(lengthField.value);
		parallelogramInstance._parallelogramWidth = parseFloat(widthField.value);
		resultFinal.innerHTML = parallelogramInstance.ParallelogramEnv();
	} else {
		parallelogramInstance._parallelogramLength = parseFloat(lengthField.value);
		parallelogramInstance._parallelogramHeight = parseFloat(heightField.value);
		resultFinal.innerHTML = parallelogramInstance.ParallelogramArea();
	}
};
