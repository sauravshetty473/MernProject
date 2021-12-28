import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "../style/styles.css";
import "../style/assignment.css";
// import "../style/assign.js";

class Assignment extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<h2 style={{ marginTop: 100, textAlign: "center" }}>
					Upload your assignment
				</h2>

				<form id="file-upload-form" class="uploader">
					<input
						id="file-upload"
						type="file"
						name="fileUpload"
						accept="image/*"
					/>

					<label for="file-upload" id="file-drag">
						<img id="file-image" src="#" alt="Preview" class="hidden" />
						<div id="start">
							<i class="fa fa-download" aria-hidden="true"></i>
							<div>Select a file or drag here</div>
							<div id="notimage" class="hidden">
								Please select an image
							</div>
							<span id="file-upload-btn" class="btn btn-primary">
								Select a file
							</span>
						</div>
						<div id="response" class="hidden">
							<div id="messages"></div>
							<progress class="progress" id="file-progress" value="0">
								<span>0</span>%
							</progress>
						</div>
					</label>
				</form>
			</div>
		);
	}
}

export default Assignment;
