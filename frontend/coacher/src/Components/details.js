import React, { Component } from "react";
import AssignmentCard from "./assignmentcard";
import Navbar from "./navbar";
import Notes from "./notes";

export default class Details extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Notes />
				<AssignmentCard />
			</div>
		);
	}
}
