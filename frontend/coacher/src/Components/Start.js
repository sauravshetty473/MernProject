import React from "react";
import "../style/styles.css";
const Start = ({ onQuizStart }) => {
	return (
		<div className="card">
			<div className="card-content">
				<div className="content">
					<h1>Start the quiz</h1>
					<p>Good luck!</p>
					<button class="btn-primary" onClick={onQuizStart}>
						Start
					</button>
				</div>
			</div>
		</div>
	);
};

export default Start;
