import React, { Component } from "react";
// import {Redirect} from 'react-router-dom';
import Navbar from "./navbar";
import "../style/styles.css";
import { Link } from "react-router-dom";
class Header extends Component {
	state = {};

	// onClick = () => {

	// 		return  <Redirect  to="Leaderboard.js" />

	//  }
	render() {
		return (
			<div>
				<Navbar />
				<section className="hero">
					<div className="container">
						<div className="hero__image"></div>
						<div className="hero__text container--pall ">
							<h1>Coacher</h1>
							<h4 className="smallfont">
								The purpose of coaching is to unlock people's potential to
								maximize their own performance. It is helping them to learn
								rather than teaching or telling them. Take learning to walk as
								an example – most people don't learn how to walk by instruction.
							</h4>
							<div>
								<Link to="/leaderboard">
									<button class="btn btn-primary" className="btns">
										My profile
									</button>
								</Link>
								<button
									class="btn btn-primary"
									className="btns"
									style={{ marginLeft: 20 }}
								>
									Assignments
								</button>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Header;
