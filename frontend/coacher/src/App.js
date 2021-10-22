import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/navbar";
import Header from "./Components/hero";
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
