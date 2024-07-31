import logo from "./logo.svg";
import "./App.css";
import { MyNav } from "./components/MyNav";
import { Products } from "./components/Products";
import { ProductDetails } from "./components/ProductDetails";
import { ProductForm } from "./components/ProductForm";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import {
	Route,
	RouterProvider,
	Routes,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { SharedLayout } from "./layout/SharedLayout";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path='products' element={<Products />} />
					<Route path='products/:id' element={<ProductDetails />} />
					<Route path='products/:id/edit' element={<ProductForm />} />
				</Route>
				<Route path='*' element={<NotFound />}></Route>
			</>
		)
	);
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
