import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "../style/styles.css";
import "../style/notes.css";

class Notes extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<h1 className="middle" style={{ marginTop: 120 }}>
					NOTES
				</h1>
				<div class="container">
					<table class="table">
						<thead>
							<tr>
								<th>SUBJECT</th>
								<th>TOPIC</th>
								<th>LINK</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td data-label="first-name">Organic Chemistry</td>
								<td data-label="last-name">Acids</td>
								<td data-label="email">
									{" "}
									<a
										href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
										download
									>
										Click to download
									</a>
								</td>
							</tr>
							<tr>
								<td data-label="first-name">Calculus</td>
								<td data-label="last-name">Integration</td>
								<td data-label="email">
									{" "}
									<a
										href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
										download
									>
										Click to download
									</a>
								</td>
							</tr>
							<tr>
								<td data-label="first-name">Physics</td>
								<td data-label="last-name">Gravitation</td>
								<td data-label="email">
									{" "}
									<a
										href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
										download
									>
										Click to download
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Notes;
