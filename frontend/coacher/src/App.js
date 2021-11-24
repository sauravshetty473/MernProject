import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/navbar";
import Header from "./Components/hero";
import "./App.css";
import Quiz from "./Components/quiz";
function App() {
	return (
		<div>
			<Router>
				<Quiz />
			</Router>
		</div>
	);
}

export default App;
