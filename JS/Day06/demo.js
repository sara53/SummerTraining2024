/**
  == Bom
    -- Window
    -- history
    -- location
    -- navigator
------------------------
    == Error Handling
    == cookies
    == ajax 
-------------------------

 */

// function execute() {
// 	get;
// 	console.log(location.pathname);
// 	set;
// 	location.href = "https://www.google.com.eg/";
// 	location.pathname = "/about.html";
// 	location.assign("https://www.google.com.eg/");
// 	location.replace("https://www.google.com.eg/");
// 	location.reload();
// }
// function execute() {
// 	// length-- forward() -- back()
// 	console.log(history);
// }
// function successCb(position) {
// 	console.log(position.coords.latitude);
// 	console.log(position.coords.longitude);
// 	console.log("Success");
// }

// function errorCb(error) {
// 	console.log(error);
// }
// navigator.geolocation.getCurrentPosition(successCb, errorCb);

// try {
// 	document.writeln("Welcome .....");
// 	console.log("Second");
// 	console.log("End");
// } catch (error) {
// 	//throw "Error";
// 	console.log(error);
// 	document.writeln("<h1>NetWork Error ... please Try Again</h1>");
// } finally {
// 	console.log("Must be output");
// }

// function add(x, y) {
// 	if (arguments.length == 0) {
// 		throw "Call fun with two args";
// 	}
// 	console.log(x + y);
// }

// add(3, 4); // args

// cookies
// presistant cookie
// session

// document.cookie = "email=sara@gmail.com";
// document.cookie = "pass=123";

// document.cookie = "email=newEmail";
// console.log(document.cookie);

var expireDate = new Date();

expireDate.setDate(expireDate.getDate() + 1);

function saveCookie(key, value) {
	document.cookie = key + "=" + value + ";expires=" + expireDate;
}
function deleteCookie(key, value) {
	var expireDate = new Date();
	expireDate.setDate(expireDate.getDate() - 1);

	document.cookie = key + "=" + value + ";expires=" + expireDate;
}

// document.cookie = "count=mfkkfk;expires=" + expireDate;

// saveCookie("username", "myUsername");
// saveCookie("count", "12");

// var input1 = document.getElementById("input1");
// var input2 = document.getElementById("input2");

// function login() {
// 	saveCookie("name", input1.value);
// 	saveCookie("pass", input2.value);
// }

// var xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// xhr.send();

// xhr.onreadystatechange = function () {
// 	if (xhr.readyState == 4) {
// 		if (xhr.status == 200) {
// 			var response = xhr.response;
// 			var users = JSON.parse(response);
// 			document.writeln(
// 				"username ",
// 				users[0].name + "  Email : ",
// 				users[0].email
// 			);
// 		}
// 	}
// };

// add( 5, 6 )

// add(1,2,3,4,7)  =>17
// add(5,2,3) ==> 10

// add("mona",2) ==> Error datatype numbers
// add()  ===>

// reverse(1,2,4,6) ==> 6,4,2 ,1
