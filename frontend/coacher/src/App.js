import Navbar from "./Components/navbar";
import Header from "./Components/hero";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Modal from "./Components/Modal";
import Quiz from "./Components/quiz";
import QuizApp from "./Components/quiz-App";
import HomeCards from "./Components/homecards";
function App() {
	return (
		<Router>
			<Header />
			<HomeCards />
		</Router>
	);
}

export default App;
