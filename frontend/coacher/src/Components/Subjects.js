import React, { Component } from "react";
import HomeCards from "./homecards";
import Navbar from "./navbar";

export default class Subjects extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<h1 style={{ marginTop: 120 }}></h1>
				<HomeCards />
			</div>
		);
	}
}
