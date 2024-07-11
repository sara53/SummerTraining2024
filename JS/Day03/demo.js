/**
 * == Object -- access
 * == Math Object
 * == Dom Object
 *-- fire an event
 *  == Dom
 * ---- How to select Element From Dom
 * ---- How to Change Content From Dom
 * ---- How to Change Style
 *
 */

/**
 * Props
 * --------
 * prop:
 *  key:value --> (any datatype)
 *
 */
// props -- methods
// var person = {
// 	fname: "ali",
// 	age: 20,
// 	address: {
// 		city: "Cairo",
// 		street: "Saad Ibrahim Str",
// 		code: 123,
// 	},

// 	colors: ["red", "green", "blue"],
// 	display: function () {
// 		console.log("Welcome Display Function");
// 		return "ITI";
// 	},
// };

// console.log(person.display());

// for (var i = 0; i < person.colors.length; i++) {
// 	console.log(person.colors[i]);
// }
// set
// person.address.code = "newCode";
// console.log(person);
// console.log(person.address["city"]);
// console.log(person.address.city);
// console.log(person["address"]["city"]);
// console.log(person["address"].city);

// var address = person.address;

// console.log(person.address.street);
// console.log(person.address.code);

// person["color"] = "red";
// console.log(person);

// override
// person["fname"] = "ahmed";

// console.log(person);

// get
// console.log(person["color"]);

// get  --> undefined
// get --> value
// console.log(person.color); // undefined
// set --- added to object
// person.color = "red";

// person.fname = "ahmed"; // override
// person.age = 25;

// console.log(person);

// dot notation

// get
// console.log(person.fname);
// console.log(person.age);
// console.log(person.address);
/**============================================= */

// var fname = "hello from iti";

// console.log(fname.length);

// fname.charAt(0);
/**===============================================
 * Math
 * -----------------------------------------------
 * == PI
 * -----------------------------------------------
 * == round
 * == floor
 * == ceil
 * == random
 * == min
 * == max
 * == pow
 * == sqrt
 * == abs
 * == sign --> 1 --> positive
 *         --> -1 --> negative
 *         --> 0 --> 0
 * == sin
 * == cos
 * ----------------------------------------------------
 * == Date -- self Study
 * -- jan --> 0
 * -- dec --> 11
 * -------------------------
 * == sun --> 0
 * == mon --> 1
 * == thu --> 2
 * == weden --> 3
 * == thur--> 4
 *------------------------------------------------------
 * ===================================================== */

// var currentDate = new Date();

// console.log(currentDate.ge());

// console.log(Math.sin((90 * Math.PI) / 180));
/**================================== */

// console.log(document);
/**====== How to Select Element From Dom
 * --------------- (Methods) -----------
 *== getElementById() ==> element --> null
 *== querySelector --> element
  == getElementsByClassName --> collection[]
  == getElementsByTagName --> collection[]
  == getElementsByName --> collection[]
 *== querySelectorAll --> []
 ----------------------- (Props)  ----------------------
 * == firstElementChild
 * == lastElementChild
 * == children
 * == document.body
 * == document.images
 * == document.links
 * == document.forms
 *  ============== How to change Content
 * == innerText
 * == innerHTML
 * == textContent
 * ---------------------------------------
 * -- value -- get - set
 * -- checked 
 * ----------------------------------------
 * 
 *  ============================= */
// var parent = document.getElementById("productContainer");

// console.log(document.links);

// var element = document.querySelector("p");
// console.log(element);
// for (var i = 0; i < elements.length; i++) {
// 	console.log(elements[i]);
// }
/**=========================== */
// var p = document.querySelector("#output");
// var input1 = document.getElementById("input1");

// function changeContent() {
// 	// get
// 	console.log(p.innerText);
// 	// set
// 	// p.innerHTML = "<h1>Content Changed</h1>";
// 	// p.innerText = "<h1>Content Changed</h1>";
// }

// function showName() {
// 	//input1
// 	// get
// 	// console.log(input1.value);
// 	// input1.value = "ali";

// 	p.innerText = input1.value;
// }

// var inputs = document.getElementsByName("choose");
// function showAnswer() {
// 	for (var i = 0; i < inputs.length; i++) {
// 		if (inputs[i].checked) {
// 			console.log(inputs[i].value);
// 		}
// 	}
// }
/**========== Change Style
 * style Object
 *
 * ========== */

var p = document.getElementById("p1");

function changeStyle() {
	// set
	p.style.backgroundColor = "#709670";
	p.style.padding = "30px";
	p.style.fontSize = "20px";
	p.style.borderRadius = "5px";
}
