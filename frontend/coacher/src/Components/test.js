import React, { Component } from "react";
import "../style/styles.css";
class Test extends Component {
	render() {
		return (
			<div class="centered">
				<ul class="dash-list">
					<li id="dash-item--1" class="dash-item dash-item--published bgtest">
						<div class="dash-item__header">
							<h3 class="dash-item__title">
								<a href="#">Semantic HTML Quiz</a>
							</h3>

							<ul id="dash-item__nav--1" class="dash-item__nav"></ul>
						</div>
						<div class="dash-item__content">
							<ul class="quiz-results">
								<li class="quiz-results__item quiz-results__item--views">
									<span class="quiz-results__number quiz-results__number--views">
										832
									</span>
									<div class="quiz-results__label">Score</div>
								</li>
								<li class="quiz-results__item quiz-results__item--finishes">
									<span class="quiz-results__number quiz-results__number--finishes">
										588
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
							<h3 class="dash-item__title">
								<a href="#">Semantic HTML Quiz</a>
							</h3>

							<ul id="dash-item__nav--1" class="dash-item__nav"></ul>
						</div>
						<div class="dash-item__content">
							<ul class="quiz-results">
								<li class="quiz-results__item quiz-results__item--views">
									<span class="quiz-results__number quiz-results__number--views">
										832
									</span>
									<div class="quiz-results__label">Score</div>
								</li>
								<li class="quiz-results__item quiz-results__item--finishes">
									<span class="quiz-results__number quiz-results__number--finishes">
										588
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
							<h3 class="dash-item__title">
								<a href="#">Semantic HTML Quiz</a>
							</h3>

							<ul id="dash-item__nav--1" class="dash-item__nav"></ul>
						</div>
						<div class="dash-item__content">
							<ul class="quiz-results">
								<li class="quiz-results__item quiz-results__item--views">
									<span class="quiz-results__number quiz-results__number--views">
										832
									</span>
									<div class="quiz-results__label">Score</div>
								</li>
								<li class="quiz-results__item quiz-results__item--finishes">
									<span class="quiz-results__number quiz-results__number--finishes">
										588
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
				</ul>
			</div>
		);
	}
}

export default Test;
