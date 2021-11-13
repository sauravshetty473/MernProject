import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/navbar";
import Header from "./Components/hero";
import "./App.css";
import Test from "./Components/test";
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
