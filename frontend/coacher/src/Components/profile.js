import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "../style/styles.css";
import axios from "axios";

class Profile extends React.Component {
	constructor(props) {
		super(props);

		const user = {
			username: localStorage.username,
		};
		this.state = {
			user: [
				{
					first: "First name",
					last: "Last name",
					url: "https://bit.ly/32xFBfH",
				},
			],
		};

		axios
			.post("http://localhost:5000/users/", user)
			.then((response) => {
				if (response.data.length > 0) {
					this.setState({ user: response.data });
					console.log();
				}

				console.log(this.state.user[0].first);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className="profile-splitter row" style={{ marginTop: 100 }}>
					<div
						className="profile-sections container-fluid  my-0"
						id="left-section"
					>
						<div>
							<img
								className="profileimg"
								src={this.state.user[0].imageURL}
								alt="Chania"
								style={{ objectFit: "cover" }}
							/>
						</div>

						<h1 className="container text-center ">
							{this.state.user[0].first + " " + this.state.user[0].last}
						</h1>

						<div className="container text-center">COMPUTER SCIENCE BTech</div>

						<div className="container text-center ">A4 Batch</div>
					</div>

					<div
						className="profile-sections col-sm-12 col-md-8 col-lg-8 col-xl-8 container-fluid my-0"
						id="right-section"
					>
						<table className="table table-info container-fluid m-0">
							<thead>
								<tr>
									<th scope="col">Test</th>
									<th scope="col">Test Name</th>
									<th scope="col">Date</th>
									<th scope="col">Score</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Quiz 1</td>
									<td>17th July</td>
									<td>25/25</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Quiz 2</td>
									<td>14th Oct</td>
									<td>15/25</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>Quiz 3</td>
									<td>20th Dec</td>
									<td>23/25</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
