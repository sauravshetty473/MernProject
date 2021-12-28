import React, { Component } from "react";
import Navbar from "./navbar";

import { Link } from "react-router-dom";
export default class SubjectQuiz extends Component {
	render() {
		return (
			<div class="container">
				<Navbar />
				<h1 className="middle" style={{ marginTop: 120 }}>
					MOCK TESTS
				</h1>
				<div class="page-wrapper">
					<ul class="box">
						<li class="box-item">
							<div class="box-item-content">
								<span class="category">CET PREP</span>
								<h6 class="header">Inorganic Chemistry</h6>
								<p class="info-text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
									cum ea esse id, ipsa minima nulla unde.
								</p>
								<Link to="/quizapp">
									<a className="btn">Start Quiz</a>
								</Link>
							</div>
						</li>

						<li class="box-item">
							<div class="box-item-content">
								<span class="category">JEE PREP</span>
								<h6 class="header">Organic Chemistry</h6>
								<p class="info-text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
									cum ea esse id, ipsa minima nulla unde.
								</p>
								<Link to="/quizapp">
									<a className="btn">Start Quiz</a>
								</Link>
							</div>
						</li>
						<li class="box-item">
							<div class="box-item-content">
								<span class="category">JEE PREP</span>
								<h6 class="header">Physics</h6>
								<p class="info-text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
									cum ea esse id, ipsa minima nulla unde.
								</p>
								<Link to="/quizapp">
									<a className="btn">Start Quiz</a>
								</Link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
