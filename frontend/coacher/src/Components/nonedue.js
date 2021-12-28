import React, { Component } from "react";
import Navbar from "./navbar";
import Notes from "./notes";

export default class Nonedue extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Notes />
				<h1 className="middle" style={{ marginTop: 120 }}>
					ASSIGNMENTS
				</h1>
				<h3 className="middle">Nothing due</h3>
			</div>
		);
	}
}
