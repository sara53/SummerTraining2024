/**
 * Events
 * -----------------------------
 * == attribute on the element
 * == attach function
 * == addEventListener
 * ------------------------------
 * == BOM
 *  -- window
 *  -- screen -- (self study)
 * -- history
 * -- navigation
 * -- location
 */

// var p = document.getElementsByClassName("myP")[0];
// var btn = document.getElementById("btn");
// function changeContent(e) {
// 	console.log(e);
// 	p.innerHTML = "Content Changed";
// }
// function changeStyle() {
// 	p.style.background = "red";
// }
// function changeStyleWithParams(color) {
// 	p.style.background = color;
// }

// function printName(name) {
// 	console.log("Hello" + name);
// }
// changeContent({target:....}) // jsEngine

// btn.onclick = function (e) {
// 	console.log(e);
// 	printName("Ola");
// };
/**===================================================== */
// btn.addEventListener("click", changeContent);
// btn.addEventListener("click", changeStyle);
// //
// btn.removeEventListener("click", changeContent);
/**==================================================== */
// function first() {
// 	console.log("First");
// }
// function second(e) {
// 	e.stopPropagation();
// 	console.log("Second");
// }
// function third(e) {
// 	console.log("Third");
// }
/**=================================================== */
// var input1 = document.getElementById("input1");
// var errorMsg = document.getElementById("errorMsg");

// input1.addEventListener("focus", function () {
// 	input1.style.border = "2px solid blue";
// });
// input1.addEventListener("blur", function () {
// 	input1.style.border = "2px solid orange";
// });
// input1.addEventListener("input", function () {
// 	if (input1.value.length <= 3) {
// 		input1.style.border = "2px solid red";
// 		errorMsg.style.display = "block";
// 	} else {
// 		input1.style.border = "2px solid green";
// 		errorMsg.style.display = "none";
// 	}
// });

// function login(e) {
// 	e.preventDefault();
// 	console.log("Login");
// }

// var myWind;
// function openNewWindow() {
// 	myWind = window.open("./about.html", "", "width=300,height=300");
// }
// function closeWindow() {
// 	myWind.close();
// }
// function moveToWindow() {
// 	myWind.moveTo(400, 400);
// }
// function moveByWindow() {
// 	myWind.moveBy(-100, -100);
// }
// function resizeToWindow() {
// 	myWind.resizeTo(400, 400);
// }
// function resizeByWindow() {
// 	myWind.resizeBy(100, 100);
// }

// engine --

// setTimeout(function () {
// 	open("about.html");
// }, 3000);

// function x() {
// 	console.log(i++);
// }

// var i = 0;
// var myInterval = setInterval(x, 1000);

// setTimeout(function () {
// 	clearInterval(myInterval);
// }, 5000);

// var output = document.getElementById("output");
// function startDownload() {
// 	output.style.display = "block";
// 	setTimeout(function () {
// 		output.innerHTML = '<a href="#google">Link</a>';
// 	}, 3000);
// }

// var result = document.getElementById("result");
// var myInterval;
// var i = 0;
// function start() {
// 	myInterval = setInterval(function () {
// 		result.innerHTML = ++i;
// 	}, 1000);
// }
// function stop() {
// 	clearInterval(myInterval);
// }
