import React from "react";
import "./App.css";
import { Content } from "./components/Content";
import { Header } from './components/Header'
import { Footer } from "./components/Footer";
import { MyNav } from "./components/MyNav";
import Slider from "./components/Slider";

export function App() {
	return (
		<>
			<MyNav />
			<Slider />

			<Content />
			<Footer />
		</>
	);
}

/**
 *  syntax suger
 * ---------------------------
 *  == JSX --> javascript XMl --> js
 *
 */
