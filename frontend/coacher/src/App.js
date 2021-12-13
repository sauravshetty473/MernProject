import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/navbar";
import Header from "./Components/hero";
import "./App.css";
import Modal from "./Components/Modal";
import Quiz from "./Components/quiz";
import QuizApp from "./Components/quiz-App";
import Register from "./Components/register";
import Login from "./Components/login";
import Notes from "./Components/notes";
import Assignment from "./Components/assignment";
import CreateTest from "./Components/create_test";
import Contact from "./Components/contact";
import About from "./Components/about";
import TnC from "./Components/TnC";
import Faq from "./Components/faq";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<TnC />
			</Router>
		</div>
	);
}

export default App;
