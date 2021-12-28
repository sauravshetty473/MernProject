import React from "react";
import { Link } from "react-router-dom";
import "../style/styles.css";
import "../style/register.css";
import axios from "axios";



class Register extends React.Component {
	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeFirst = this.onChangeFirst.bind(this);
		this.onChangeLast = this.onChangeLast.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onChangeRepeat = this.onChangeRepeat.bind(this);
		this.onChangeType = this.onChangeType.bind(this);
		this.onChangeImage = this.onChangeImage.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: "",
			firstname: "",
			lastname: "",
			email: "",
			password: "",
			repeat: "",
			type: "Student",
			image: "https://bit.ly/32xFBfH",
		};
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value,
		});
	}

	onChangeImage(e) {
		this.setState({
			image: e.target.value,
		});
	}

	onChangePhoto(e) {
		this.setState({
			username: e.target.value,
		});
	}

	onChangeFirst(e) {
		this.setState({
			firstname: e.target.value,
		});
	}

	onChangeLast(e) {
		this.setState({
			lastname: e.target.value,
		});
	}

	onChangeEmail(e) {
		this.setState({
			email: e.target.value,
		});
	}

	onChangePassword(e) {
		this.setState({
			password: e.target.value,
		});
	}

	onChangeRepeat(e) {
		this.setState({
			repeat: e.target.value,
		});
	}

	onChangeType(e) {
		this.setState({
			type: e.target.value,
		});
	}

	onSubmit(e) {
	
		e.preventDefault();

		const user = {
			username: this.state.username,
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			email: this.state.email,
			password: this.state.password,
			type: this.state.type,
			imageURL: this.state.image,
		};

		console.log(user);

		axios.post("http://localhost:5000/users/add", user).then((res) => {
      console.log(res.status)
			if (Math.floor(res.status / 100) == 2) {
				console.log("success");

				localStorage.username = this.state.username;
				localStorage.email = this.state.email;

				window.location = "/";
			}
      else{
        alert("Username or email address already taken");
      }
		}).catch((e)=>{
      alert("Username or email address already taken");
    });
	}

	render() {
		return (
			<div className="Signup">
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
								<Link to={"/"} class="nav-link">
									Login
								</Link>
							</li>
						</ul>
					</div>
				</nav>
				<form onSubmit={this.onSubmit}>
					<h2>Sign Up</h2>
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
									<span className="fa fa-user"></span>
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								name="firstname"
								placeholder="First Name"
								required="required"
								onChange={this.onChangeFirst}
							/>
						</div>
					</div>
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
								name="lastname"
								placeholder="Last Name"
								required="required"
								onChange={this.onChangeLast}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-paper-plane"></i>
								</span>
							</div>
							<input
								type="email"
								className="form-control"
								name="email"
								placeholder="Email Address"
								required="required"
								onChange={this.onChangeEmail}
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
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-lock"></i>
									<i className="fa fa-check"></i>
								</span>
							</div>
							<input
								type="password"
								className="form-control"
								name="confirm_password"
								placeholder="Confirm Password"
								required="required"
								onChange={this.onChangeRepeat}
							/>
						</div>
					</div>

					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-lock"></i>
									<i className="fa fa-check"></i>
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								name="profile pic URL"
								placeholder="profile pic URL"
								onChange={this.onChangeImage}
							/>
						</div>
					</div>


					<br />
					<div className="form-group text-center">
						<label className="form-check-label" />
						<input type="checkbox" required="required" id="myCheckbox" /> I
						accept the <Link to="/terms">Terms of Use</Link> &amp;{" "}
						<Link to="/privacy">Privacy Policy</Link>
					</div>
					<div className="form-group text-center">
						<input
							type="submit"
							value="Create User"
							className="btn btn-primary"
						/>
					</div>

					<br />
					<div className="text-center" style={{ marginBottom: "10px" }}>
						Already have an account?<Link to="/">Login here</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default Register;
