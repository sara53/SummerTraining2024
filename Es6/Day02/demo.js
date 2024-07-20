/**
 * Agenda
 * ----------------------
 *  == Asynchrouns Code execution in memory
 *  == Promise
 *      -- then -- catch
 *      -- async -- await
 *
 *  -- OOP in es6
 *
 */

// function first() {
// 	console.log("First");
// 	second();
// 	console.log("End");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("second");
// 	}, 2000);
// }

// first();

// setTimeout(() => {
// 	console.log("First");
// }, 0);

// console.log("Second");

// console.log("End");

// var x;

// setTimeout(() => {
// 	x = 10;
// 	console.log(x);
// }, 2000);

// send request to api -- response [100,200,300]

// request -- success--fails

// function greet(myFun) {
// 	myFun(
// 		function () {
// 			console.log("CB1");
// 		},
// 		function () {
// 			console.log("Cb2");
// 		}
// 	);
// }

// greet(function (a, b) {
// 	a();
// 	b();
// });

// jsEngine

// var myPromise = new Promise(function (x, y) {
// 	// x("mona");
// 	y("Error message");
// });

// myPromise
// 	.then(function (data) {
// 		console.log(data);
// 		console.log("Welcome success");
// 	})
// 	.catch(function (errorMsg) {
// 		console.log(errorMsg);
// 	});

/**
 * == pending
 * == fulfilled --- success -- then
 * == rejected  -- fail -- catch
 */

function getUsersIds() {
	var myPromise = new Promise(function (x, y) {
		var users;
		users = [100, 200, 300];
		if (users) {
			x(users);
		} else {
			y("Error on getting users list");
		}
	});

	return myPromise;
}

function getUsersDetails(userId) {
	var myPromise = new Promise(function (x, y) {
		var user = {
			id: userId,
			name: "ali",
			address: "Cairo",
		};

		if (user) {
			x(user);
		} else {
			y("Error on getting user details");
		}
	});

	return myPromise;
}

function getName() {
	return "mona";
}
// getUsersIds()
// 	.then(function (users) {
// 		return getUsersDetails(users[0]);
// 	})
// 	.then(function (user) {
// 		console.log(user);
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});

// async function execute() {
// 	try {
// 		let users = await getUsersIds();
// 		let user = await getUsersDetails(users[0]);
// 		console.log(user);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();
/**------------------ */

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then(function (response) {
// 		return response.json();
// 	})
// 	.then(function (data) {
// 		document.writeln(`<h1>${data[0].username}</h1>`);
// 		document.writeln(`<h1>${data[0].email}</h1>`);
// 		document.writeln(`<h1>${data[0].phone}</h1>`);
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});

// async function execute() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();
// 		document.writeln(`<h1>${data[0].username}</h1>`);
// 		document.writeln(`<h1>${data[0].email}</h1>`);
// 		document.writeln(`<h1>${data[0].phone}</h1>`);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();
/**---------------------------- */

// var product1 = {
// 	id: 1,
// 	name: "Book",
// 	price: 300,
// };
// var product2 = {
// 	id: 1,
// 	name: "Book",
// 	price: 300,
// 	cat: "school",
// };
// var product2 = {
// 	id: 3,
// 	discount: function () {},
// };

// document.writeln(`<div>
//     <h1>Name : ${product1.name}</h1>
//     <p>Price: ${product1.price}</p>
//     <p>Cat: ${product1.cat}</p>
// </div>`);
// document.writeln("<hr/>");
// document.writeln(`<div>
//     <h1>Name : ${product2.name}</h1>
//     <p>Price: ${product2.price}</p>
//     <p>Cat: ${product2.cat}</p>
// </div>`);
// class Product {
// 	constructor(id = "", name = "", price = "") {
// 		this.id = id;
// 		this.name = name;
// 		this.price = price;
// 	}

// 	discount(rate) {
// 		return this.price * rate;
// 	}
// }

// let product1 = new Product(1, "book", 300);
// let product2 = new Product(2, "pen", 100);

// document.writeln(`<div>
//     <h1>Name : ${product1.name}</h1>
//     <p>Price: ${product1.price}</p>

// </div>`);
// document.writeln("<hr/>");
// document.writeln(`<div>
//     <h1>Name : ${product2.name}</h1>
//     <p>Price: ${product2.price}</p>
// </div>`);
/**--------------------------------------- */

// parent class -- super class

// inheritance
// class Person {
// 	#id;
// 	constructor(id, name, age) {
// 		this.#id = id;
// 		this.name = name;
// 		this.age = age;
// 	}

// 	display() {
// 		console.log(`Name : ${this.name} , Age: ${this.age}`);
// 	}

// 	get getId() {
// 		return this.#id;
// 	}

// 	set setId(value) {
// 		this.#id = value;
// 	}
// }

// let person1 = new Person(1, "ali", 23);

// person1.setId = "new ID";

// console.log(person1.getId);

// person1.setId("newID"); // set
// console.log(person1.getId()); // get
// console.log(person1.#id);

// person1.name = "mona"; // set
// console.log(person1.name); // get

// subClass -- child class
// class User extends Person {
// 	constructor(id, name, age, pass) {
// 		super(id, name, age);
// 		this.pass = pass;
// 	}

// 	generatePass() {
// 		console.log(`${this.pass.toUpperCase()}#$%@${this.pass}`);
// 	}
// 	display() {
// 		super.display(); //parent
// 		console.log(`${this.pass}`);
// 	}
// }

// let myUser = new User(1, "mona", "20", "mona123");
// myUser.display();
/**--------------------------------------- */

class Person {
	constructor(name, age) {
		if (this.constructor === Person) {
			throw "Can't take an object from abstract class";
		}
		this.name = name;
		this.age = age;
	}

	display() {
		throw "Method is not implemented";
	}
}

let person1 = new Person("mona", 40);

console.log(person1);
class User extends Person {
	constructor(name, age, password) {
		super(name, age);
	}

	display() {
		console.log("New Impl");
	}
}
