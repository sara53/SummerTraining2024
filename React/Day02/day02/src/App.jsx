

import { useState } from "react";
import { Counter } from "./components/Counter";
import { Login } from "./components/Login";
import Movies from "./components/Movies";
import { movies } from './models/movesList'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Shared from "./components/Shared";
import { MovieCard } from "./components/MovieCard";

// import x from '../public/1.png'

function App() {

	// let [ show, setShow ] = useState( false )

	// let login = () => {
	// 	setShow( true )
	// }

	const router = createBrowserRouter( createRoutesFromElements(
		<Route path="/" element={<Shared />} >
			<Route index element={<Login />} />
			<Route path="products" element={<Movies moviesList={movies} />} >
				<Route path=":id" element={<Counter />} />
			</Route>

			<Route path="*" element={<Counter />} />
		</Route>
	) )

	return <>
		<RouterProvider router={router} />
		{/* {!show && <button onClick={login} className="btn d-block w-50 btn-outline-primary m-5">Login</button>}
		{show && <Login setShow={setShow} />} */}


		{/* <Counter /> */}
		{/* <Movies moviesList={movies} /> */}
	</>;
}

export default App;
