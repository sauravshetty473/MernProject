import Navbar from "./Components/navbar";
import Header from "./Components/hero";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Modal from "./Components/Modal";
import Quiz from "./Components/quiz";
import QuizApp from "./Components/quiz-App";
import HomeCards from "./Components/homecards";
import Register from "./Components/register";
import Login from "./Components/login";
import Test from "./Components/test";
import Footer from "./Components/footer";
import About from "./Components/about";
import Contact from "./Components/contact";
import Question from "./Components/Question";
import Notes from "./Components/notes";
import Assignment from "./Components/assignment";
import Privacy from "./Components/privacy";
import TnC from "./Components/TnC";
import End from "./Components/End";
import Faq from "./Components/faq";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />} />
				{/* <Route path="/" element={<HomeCards />} />
				<Route path="/" element={<Test />} /> */}
				<Route path="quizapp" element={<QuizApp />} />
				<Route path="question" element={<Question />} />
				<Route path="notes" element={<Notes />} />
				<Route path="assignment" element={<Assignment />} />
				<Route path="tnc" element={<TnC />} />
				<Route path="courses" element={<HomeCards />} />
				<Route path="register" element={<Register />} />
				<Route path="faq" element={<Faq />} />
				<Route path="login" element={<Login />} />
				<Route path="contact" element={<Contact />} />
				<Route path="about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
