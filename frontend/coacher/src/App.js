import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/navbar";
import Header from "./Components/hero";
import "./App.css";
import Modal from "./Components/Modal";
import Quiz from "./Components/quiz";
import QuizApp from "./Components/quiz-App";
function App() {
	return (
		<div>
			<Router>
				<Header />
			</Router>
		</div>
	);
}

export default App;
