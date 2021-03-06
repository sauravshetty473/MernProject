import React, { useEffect, useState } from "react";
import QuizApp from "./quiz-App";
import "../style/styles.css";
import { formatTime } from "../utils";

import { Link } from "react-router-dom";

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
	const [correctAnswers, setCorrectAnswers] = useState(0);

	useEffect(() => {
		let correct = 0;
		results.forEach((result, index) => {
			if (result.a === data[index].answer) {
				correct++;
			}
		});
		setCorrectAnswers(correct);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="card">
			<div className="card-content">
				<div className="content">
					<h3>Your results</h3>
					<p>
						{correctAnswers} of {data.length}
					</p>
					<p>
						<strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong>
					</p>
					<p>
						<strong>Your time:</strong> {formatTime(time)}
					</p>
					<Link to="/home">
						<button className="button is-success" onClick={onReset}>
							Back to home
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default End;
