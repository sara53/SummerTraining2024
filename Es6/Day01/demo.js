/**
 * == var -- let -- const
 * == destructing
 * == rest params
 * == primitive dataType VS reference datatype
 * == spread operators
 * == default values
 * == arrow function
 * == string api
 * == array api
 *
 */

/**
 * var
 *  == reassign
 *  == redeclaration
 *  == Hoisting
 *  == added to window object
 *  == function scope
 *
 * ----------------------------------
 * let
 *  == reassign
 *  == can't redeclare
 *  == can't Hoisting
 *  == not added to window object
 *  == block scope
 * -----------------------------
 * const
 *  == can't reassign
 *  == can't redeclare
 *  == can't Hoisting
 *  == not added to window object
 *  == block scope
 * -----------------------------
 *
 */

// const arr = [1, 2, 5];

// arr = 2;
// console.log(arr); //
// const PI = 3.14;

// const PI = 2;
// console.log(PI);

// let fname = "ali";
// console.log(window.fname);

// function print() {

// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 	}

// 	console.log("i outside loop is : ", i);
// }

// print();
/**-------------------------------------- */

// let x = arr[0];
// let y = arr[1];

// let [, , z] = [10, "mona", true];

// console.log(z);

// function useArr(temp) {
// 	return [
// 		temp,
// 		function () {
// 			console.log("Welcome");
// 		},
// 		true,
// 	];
// }

// let [x, y] = useArr(123);

// y();
/** =============Destructring================= */

// let person = { fname: "ali", color: "red", age: 25, fev: [1, 2, 4] };

// // let x = person.fname;
// // let y = person.color;

// // let { fname: fname, color: color } = person;
// let { fname, color, fev } = person;

// console.log(fname);
// console.log(color);

// console.log(fev);
/** =============Spread Operator================= */

// let a = 3;

// let b = a;

// a = 5;

// console.log("a :", a);
// console.log( "b :", b );

// let arr1 = [10, "mona", true, "Ahmed"];

// let arr2 = ["apple", "Orange", ...arr1, 1, 2, 3, 45];

// console.log("arr1: ", arr1);
// console.log("arr2: ", arr2);

// let person1 = { fname: "mona", age: 12 };

// let person2 = { ...person1, color: "red" };

// console.log(person1);
// console.log(person2);

// let arr = [10, 20, 40, 70];

// console.log(Math.max(...arr));
/**-----------rest params & default values--------------------- */

// function add(...w) {
// 	console.log(w);
// }

// add(10, 30, "mona", "ahmed", true);
/**--------------- Arrow Function ----------------- */
// function statement -- declaration
// function add1(x, y) {
// 	console.log(x + y);
// }
// // expression
// let add2 = function (x, y) {
// 	console.log(x + y);
// };
// //arrow function
// let add3 = (x, y) => {
// 	console.log(x + y);
// };

// let add = (x = 0, y = 0) => {
// 	return x + y;
// };

// let result = add(2, 5);
// console.log(result);
/**----------------------------- */

// let sayHello = () => {
// 	console.log("Hello");
// };

// sayHello();

// let square = (x, y) => x + y;

// let result = square(40);
// console.log(result);

// this --> window

// var fname = "mona";
// function getName() {
// 	console.log(this.fname);
// }
// getName();

// this -- window

// var fname = "ahmed";
// let person = {
// 	fname: "ali",
// 	display: () => {
// 		setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();
/**
 * startWith
 * endWith
 * include
 *
 */
// var fname = "hello from iti";

// console.log(`${fname}

// ${fname}

// emoji :)
// `);
/**------------------------ */
// let arr = [10, 20, 35, 34, 12];

// let result = arr.findIndex((item, index) => item > 25);

// console.log(result);
// function findElement(x, y, z) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log("z : ", z);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) return arr[i];
// 	}
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("------------");
// }

/**
 *
 * == find
 * == findIndex
 * == map
 * == every
 * == some
 * == filter
 */

// let products = [
// 	{
// 		id: 1,
// 		name: "Book",
// 		price: 200,
// 		cat: "school",
// 	},
// 	{
// 		id: 2,
// 		name: "Pen",
// 		price: 100,
// 		cat: "school",
// 	},
// 	{
// 		id: 3,
// 		name: "mouse",
// 		price: 100,
// 		cat: "electronics",
// 	},
// 	{
// 		id: 4,
// 		name: "phone",
// 		price: 100,
// 		cat: "electronics",
// 	},
// ];

// let newProducrs = products.filter(function (item, index) {
// 	return false;
// });

// console.log(newProducrs);
// let itiTracks = ["PHP", "Dotnet", "OS"];

// itiTracks.forEach((item) => console.log(item));

// var result = itiTracks.every((item, index) => item.startsWith("P"));
// console.log(result);
// let result = itiTracks.map(function (item, index) {
// 	return `<div><h${index + 1}>Welcome ${item} From ITI</h$></div>`;
// });

// for (let i = 0; i < result.length; i++) {
// 	document.writeln(result[i]);
// }

// let result = itiTracks.map(function (item, index) {
// 	return "ahmed";
// });

// console.log(result);
