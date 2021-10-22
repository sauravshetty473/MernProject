import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/navbar";
function App() {
	return (
		<div>
			<Router>
				<Navbar />
			</Router>
		</div>
	);
}

export default App;
