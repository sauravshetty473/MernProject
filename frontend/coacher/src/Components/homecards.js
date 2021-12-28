import React, { Component } from "react";
import "../style/styles.css";

import { Link } from "react-router-dom";
const HomeCards = (props) => {
	return (
		<div class="container">
			<h1 className="middle">SUBJECTS</h1>
			<div class="page-wrapper">
				<ul class="box">
					<li class="box-item">
						<div class="box-item-content">
							<span class="category">CET PREP</span>
							<h6 class="header">Inorganic Chemistry</h6>
							<p class="info-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
								cum ea esse id, ipsa minima nulla unde.
							</p>
							<Link to="/nonedue">
								<a className="btn">Details</a>
							</Link>
						</div>
					</li>
					<li class="box-item">
						<div class="box-item-content">
							<span class="category">JEE PREP</span>
							<h6 class="header">Calculus</h6>
							<p class="info-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
								cum ea esse id, ipsa minima nulla unde.
							</p>
							<Link to="/details">
								<a className="btn">Details</a>
							</Link>
						</div>
					</li>
					<li class="box-item">
						<div class="box-item-content">
							<span class="category">JEE PREP</span>
							<h6 class="header">Organic Chemistry</h6>
							<p class="info-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
								cum ea esse id, ipsa minima nulla unde.
							</p>
							<Link to="/details">
								<a className="btn">Details</a>
							</Link>
						</div>
					</li>
					<li class="box-item">
						<div class="box-item-content">
							<span class="category">JEE PREP</span>
							<h6 class="header">Physics</h6>
							<p class="info-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
								cum ea esse id, ipsa minima nulla unde.
							</p>
							<Link to="/details">
								<a className="btn">Details</a>
							</Link>
						</div>
					</li>
					<li class="box-item">
						<div class="box-item-content">
							<span class="category">CET PREP</span>
							<h6 class="header">Algebra</h6>
							<p class="info-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
								cum ea esse id, ipsa minima nulla unde.
							</p>
							<Link to="/details">
								<a className="btn">Details</a>
							</Link>
						</div>
					</li>
					<li class="box-item">
						<div class="box-item-content">
							<span class="category">BITS PREP</span>
							<h6 class="header">Chemistry</h6>
							<p class="info-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
								cum ea esse id, ipsa minima nulla unde.
							</p>
							<Link to="/details">
								<a className="btn">Details</a>
							</Link>
						</div>
					</li>
					<li class="box-item">
						<div class="box-item-content">
							<span class="category">CET PREP</span>
							<h6 class="header">Algebra</h6>
							<p class="info-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
								cum ea esse id, ipsa minima nulla unde.
							</p>
							<Link to="/details">
								<a className="btn">Details</a>
							</Link>
						</div>
					</li>
					<li class="box-item">
						<div class="box-item-content">
							<span class="category">BITS PREP</span>
							<h6 class="header">Chemistry</h6>
							<p class="info-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
								cum ea esse id, ipsa minima nulla unde.
							</p>
							<Link to="/details">
								<a className="btn">Details</a>
							</Link>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HomeCards;
