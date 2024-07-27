

import { useState } from "react";
import { Counter } from "./components/Counter";
import { Login } from "./components/Login";
import Movies from "./components/Movies";
import { movies } from './models/movesList'

function App() {

	let [ show, setShow ] = useState( false )

	let login = () => {
		setShow( true )
	}


	return <>
		{!show && <button onClick={login} className="btn d-block w-50 btn-outline-primary m-5">Login</button>}
		{show && <Login setShow={setShow} />}


		{/* <Counter /> */}
		{/* <Movies moviesList={movies} /> */}
	</>;
}

export default App;
