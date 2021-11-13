import React, { Component } from "react";
import PropTypes from "prop-types";

class TestCard extends Component {
	render() {
		return (
			<div>
				<section id="quiz">
					<div class="card col col-sm-8 offset-sm-2">
						<span class="card-title"></span>
						<div class="card-content">
							<ul class="list-group">
								<li class="list-group-item">
									<button class="btn btn-secondary">A</button>
									<span>Some text 1</span>
								</li>
								<li class="list-group-item">
									<button class="btn btn-secondary">B</button>{" "}
									<span>Some text 1</span>
								</li>
								<li class="list-group-item">
									<button class="btn btn-secondary">C</button>
									<span>Some text 1</span>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
export default TestCard;
