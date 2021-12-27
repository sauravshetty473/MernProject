import React, { Component } from "react";
import Footer from "./footer";
import Header from "./hero";
import HomeCards from "./homecards";
import Navbar from "./navbar";
import Test from "./test";

export default class Homepage extends Component {
	render() {
		return (
			<div>
				<Header />
				<HomeCards />
				<Test />
				<Footer />
			</div>
		);
	}
}
