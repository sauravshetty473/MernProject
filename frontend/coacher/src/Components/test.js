import React, { Component } from "react";
import "../style/styles.css";
class Test extends Component {
	render() {
		return (
			<div class="centered">
				<h1 className="middle" style={{ marginTop: 20 }}>
					RECENT TESTS
				</h1>
				<ul class="dash-list">
					<li id="dash-item--1" class="dash-item dash-item--published">
						<div class="dash-item__header">
							<h3 class="dash-item__title">Physics Quiz</h3>

							<ul id="dash-item__nav--1" class="dash-item__nav"></ul>
						</div>
						<div class="dash-item__content">
							<ul class="quiz-results">
								<li class="quiz-results__item quiz-results__item--views">
									<span class="quiz-results__number quiz-results__number--views">
										16
									</span>
									<div class="quiz-results__label">Score</div>
								</li>
								<li class="quiz-results__item quiz-results__item--finishes">
									<span class="quiz-results__number quiz-results__number--finishes">
										20
									</span>
									<div class="quiz-results__label">Out Of</div>
								</li>
								<li class="quiz-results__item quiz-results__item--average-score">
									<span class="quiz-results__number quiz-results__number--average-score">
										80
									</span>
									<div class="quiz-results__label">Percentage</div>
								</li>
								<li>
									<a href="#">Results</a>
								</li>
							</ul>
						</div>
					</li>
					<li id="dash-item--1" class="dash-item dash-item--published">
						<div class="dash-item__header">
							<h3 class="dash-item__title">Organic Chemistry Quiz</h3>

							<ul id="dash-item__nav--1" class="dash-item__nav"></ul>
						</div>
						<div class="dash-item__content">
							<ul class="quiz-results">
								<li class="quiz-results__item quiz-results__item--views">
									<span class="quiz-results__number quiz-results__number--views">
										90
									</span>
									<div class="quiz-results__label">Score</div>
								</li>
								<li class="quiz-results__item quiz-results__item--finishes">
									<span class="quiz-results__number quiz-results__number--finishes">
										100
									</span>
									<div class="quiz-results__label">Out Of</div>
								</li>
								<li class="quiz-results__item quiz-results__item--average-score">
									<span class="quiz-results__number quiz-results__number--average-score">
										90
									</span>
									<div class="quiz-results__label">Percentage</div>
								</li>
								<li>
									<a href="#">Results</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}

export default Test;
