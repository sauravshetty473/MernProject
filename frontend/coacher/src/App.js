import Navbar from "./Components/navbar";
import Header from "./Components/hero";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Modal from "./Components/Modal";
import Quiz from "./Components/quiz";
import QuizApp from "./Components/quiz-App";
import HomeCards from "./Components/homecards";
import Register from "./Components/register";
import Test from "./Components/test";
function App() {
	return (
		<Router>
			<Header />
			<HomeCards />
			<Test />
		</Router>
	);
}

export default App;
