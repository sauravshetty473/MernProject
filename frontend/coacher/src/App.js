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

import Profile from "./Components/profile";
import Teacher_Profile from "./Components/teacher_profile";
import All_Tests from "./Components/all_tests";

import Homepage from "./Components/Homepage";
import Subjects from "./Components/Subjects";
import SubjectQuiz from "./Components/subjextquiz";
import AssignmentCard from "./Components/assignmentcard";
import Details from "./Components/details";
import Nonedue from "./Components/nonedue";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/nonedue" element={<Nonedue />} />
				<Route path="quizapp" element={<QuizApp />} />
				<Route path="question" element={<Question />} />
				<Route path="notes" element={<Notes />} />
				<Route path="assignment" element={<Assignment />} />
				<Route path="tnc" element={<TnC />} />
				<Route path="courses" element={<Subjects />} />
				<Route path="home" element={<Homepage />} />
				<Route path="details" element={<Details />} />
				<Route path="assignmentcard" element={<AssignmentCard />} />
				<Route path="faq" element={<Faq />} />
				<Route path="subjectquiz" element={<SubjectQuiz />} />
				<Route path="register" element={<Register />} />
				<Route path="contact" element={<Contact />} />
				<Route path="about" element={<About />} />
				<Route path="privacy" element={<Privacy />} />
				<Route path="profile" element={<Profile />} />
				<Route path="profile1" element={<Teacher_Profile />} />
				<Route path="tests" element={<All_Tests />} />
			</Routes>
		</BrowserRouter>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
