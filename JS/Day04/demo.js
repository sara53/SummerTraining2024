/**
 * Dom
 * --------------------------------
 * == How to Style element to js
 * ---------------------------------
 *  == Style Object
 *  == className
 *  == class List
 *      -- add
 *      -- remove
 *      -- toggle
 * == setAttribute
 * =================================
 * == attributes
 * =================================
 * -- getAttribute
 * -- setAttribute
 * -- hasAttribute
 * -- removeAttribute
 * -- toggleAttribute
 * =================================
 * == Create New Element From js
 * -- createElement
 * -- createTextNode
 * -- append
 * -- appendChild
 * =================================
 */

// var p = document.getElementById("p1");

// var changeStyle = function () {
// 	// get
// 	// console.log(p.classList);

// 	// p.classList.add("jsClass");
// 	// p.classList.remove("myP");
// 	p.classList.toggle("jsClass");
// };

// var changeStyle = function () {
// 	// 2-className
// 	// get
// 	console.log(p.className);
// 	// set --> override
// 	p.className = " jsClass";
// };
/* ================Attributes=================*/

// var p = document.querySelector("p");
// var img = document.images[0];
// function execute() {
// 	if (img.hasAttribute("src")) {
// 		img.removeAttribute("src");
// 	} else {
// 		img.setAttribute("src", "./images/2.jpg");
// 	}
// 	// console.log(img.hasAttribute("alt"));
// 	// p.className
// 	// get
// 	// console.log(img.getAttribute("alt"));
// 	// console.log(p.getAttribute("class"));
// 	// p.setAttribute("id", "newId");
// 	// p.className = 'jsClass
// 	// p.setAttribute("class", "jsClass");
// 	// img.setAttribute("src", "./images/2.jpg");
// }

// var p = document.querySelector("p");

// function execute() {
// 	p.classList.toggle("content");
// }
/**================== */
// var img = document.images[0];
// var count = 1;
// function nextImg() {
// 	//./images/1.jpg
// 	count++;
// 	if (count == 5) {
// 		count = 1;
// 	}
// 	img.setAttribute("src", "./images/" + count + ".jpg");
// }
/**
 *
 * <p>Welcome React Group</p>
 */

// var targetElement = document.querySelector(".p2");

// var parent = document.querySelector(".parent");
// var p = document.createElement("p");
// var myText = document.createTextNode("Welcome react group");

// var span = document.createElement("span");

// span.innerHTML = "Welcome My Span";

// // string
// var result = p.append(myText);
// console.log(result);
// p.setAttribute("class", "jsClass");

// function execute() {
// 	document.body.append(p);
// 	// targetElement.after(p);
// 	// parent.append(p);
// 	// parent.append(p, "Text Appended");
// 	// // parent.appendChild(p);
// 	// // parent.appendChild(span);
// }

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var tbody = document.querySelector("tbody");

var count = 0;
function addStudent() {
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");
	var td4 = document.createElement("td");
	td1.innerHTML = ++count;
	td2.innerHTML = input1.value;
	td3.innerHTML = input2.value;
	td4.innerHTML = "<button>Delete Student</button>";

	tr.append(td1, td2, td3, td4);

	tbody.append(tr);
}
