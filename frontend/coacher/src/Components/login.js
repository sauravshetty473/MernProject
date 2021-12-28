import React from "react";
import { Link } from "react-router-dom";
import "../style/styles.css";
import "../style/login.css";

import axios from "axios";

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: "",
			password: "",
		};
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value,
		});
		console.log(e.target.value);
	}

	onChangePassword(e) {
		this.setState({
			password: e.target.value,
		});
	}

	async onSubmit(e) {
		let axiosConfig = {
			headers: {
				"Content-Type": "application/json;charset=UTF-8",
				"Access-Control-Allow-Origin": "*",
			},
		};

		const user = {
			username: this.state.username,
			password: this.state.password,
		};

		alert(user.username);

		const request = await axios
			.post("http://localhost:5000/users/", user, axiosConfig)
			.then((response) => {
				alert(response.data.length);

				if (response.data.length > 0) {
					localStorage.username = this.state.username;
					localStorage.email = response.data[0].email;
					console.log(window.$user);
					window.location = "/home";
				}
			})
			.catch((error) => {
				alert("error");
				console.log(error);
			});
	}

	render() {
		return (
			<div className="Login">
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
							<li class="navbar-item" className="highlight">
								<Link to={"/register"} class="nav-link">
									Register
								</Link>
							</li>
						</ul>
					</div>
				</nav>
				<form onSubmit={this.onSubmit}>
					<h2>Login</h2>
					<br />
					<hr />
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="fa fa-user"></span>
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								name="username"
								placeholder="Username"
								required="required"
								onChange={this.onChangeUsername}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-lock"></i>
								</span>
							</div>
							<input
								type="password"
								className="form-control"
								name="password"
								placeholder="Password"
								required="required"
								onChange={this.onChangePassword}
							/>
						</div>
					</div>
					<br />
					<div className="form-group text-center">
						<input type="submit" value="LOGIN" className="btn btn-primary" />
					</div>
					<br />
					<div
						className="text-center"
						style={{ marginBottom: "10px", color: "purple" }}
					>
						Don't have an account?{" "}
						<Link to="/register" style={{ textDecoration: "none" }}>
							Register here
						</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
