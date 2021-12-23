import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../style/styles.css";
const Navbar = (props) => {
	return (
		<nav class="navbar  bg-light navbar-expand-lg fixed-top">
			<a href="#" class="navbar-brand">
				Coacher
			</a>
			<button
				class="navbar-toggler"
				data-toggle="collapse"
				data-target="#navbarCollapse"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav ml-auto">
					<li class="navbar-item">
						<a href="#" class="nav-link">
							Homepage
						</a>
					</li>
					<li class="navbar-item">
						<Link to="/contact" class="nav-link">
							Profile
						</Link>
					</li>
					<li class="navbar-item">
						<Link to="/feedback" class="nav-link">
							Subjects
						</Link>
					</li>
					<li class="navbar-item" className="highlight">
						<Link to="/login" class="nav-link">
							Login
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
