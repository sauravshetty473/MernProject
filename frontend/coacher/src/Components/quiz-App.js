import React, { useState, useEffect } from "react";
import "../style/styles.css";
import Start from "./Start";
import Question from "./Question";
import End from "./End";
import Modal from "./Modal";
import quizData from "../data/quiz.json";

import { Link } from "react-router-dom";
let interval;

const QuizApp = () => {
	const [step, setStep] = useState(1);
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [answers, setAnswers] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [time, setTime] = useState(0);

	useEffect(() => {
		if (step === 3) {
			clearInterval(interval);
		}
	}, [step]);

	const quizStartHandler = () => {
		setStep(2);
		interval = setInterval(() => {
			setTime((prevTime) => prevTime + 1);
		}, 1000);
	};

	const resetClickHandler = () => {
		setActiveQuestion(0);
		setAnswers([]);
		setStep(2);
		setTime(0);
		interval = setInterval(() => {
			setTime((prevTime) => prevTime + 1);
		}, 1000);
	};

	return (
		<div className="QuizApp" style={{ marginTop: 120, padding: 20 }}>
			<nav class="navbar  bg-light navbar-expand-lg fixed-top">
				<a href="#" class="navbar-brand">
					Coacher
				</a>
				<button
					class="navbar-toggler"
					data-toggle="collapse"
					data-target="#navbarCollapse"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav ml-auto">
						<li class="navbar-item" className="highlight">
							<Link to={"/home"} class="nav-link">
								End
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			{step === 1 && <Start onQuizStart={quizStartHandler} />}
			{step === 2 && (
				<Question
					data={quizData.data[activeQuestion]}
					onAnswerUpdate={setAnswers}
					numberOfQuestions={quizData.data.length}
					activeQuestion={activeQuestion}
					onSetActiveQuestion={setActiveQuestion}
					onSetStep={setStep}
				/>
			)}
			{step === 3 && (
				<End
					results={answers}
					data={quizData.data}
					onReset={resetClickHandler}
					onAnswersCheck={() => setShowModal(true)}
					time={time}
				/>
			)}

			{showModal && (
				<Modal
					onClose={() => setShowModal(false)}
					results={answers}
					data={quizData.data}
				/>
			)}
		</div>
	);
};

export default QuizApp;
