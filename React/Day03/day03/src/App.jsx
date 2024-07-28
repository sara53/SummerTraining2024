
import { useState } from "react";
import "./App.css";
import { Counter } from "./component/Counter";
import { Login } from "./component/Login";
import { MyCounter } from "./component/MyCounter";
import { ProductForm } from "./component/ProductForm";

function App() {


	// let [ show, setShow ] = useState( true )

	let [ productName, setProductName ] = useState( '' )



	return <>
		<ProductForm setProductName={setProductName} productName={productName} />

		{/* {console.log( "Render at app component" )}
		{show && <Login />}
		<button onClick={() => setShow( !show )} className="m-5 btn btn-dark w-50">Toggle</button> */}

		{/* <MyCounter /> */}
		{/* <Counter btnText="myBtn Text" /> */}
	</>;
}

export default App;
