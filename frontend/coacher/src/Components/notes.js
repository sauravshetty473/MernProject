import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "../style/styles.css";
import "../style/notes.css";
import axios from 'axios';

class Notes extends React.Component {

	constructor(props) {
		super(props);
		this.state = {notes: []};
	  }
	

	componentDidMount() {
		axios.get('http://localhost:5000/notes/')
		  .then(response => {
			console.log(response.data);
			this.setState({ notes: response.data })
		  })
		  .catch((error) => {
			console.log(error);
		  })
	  }


	render() {
		return (
			<div>
				<Navbar />
				<h1 className="middle" style={{ marginTop: 120 }}>
					NOTES
				</h1>
				<div class="container">
					<table class="table">
						<thead>
							<tr>
								<th>SUBJECT</th>
								<th>TOPIC</th>
								<th>LINK</th>
							</tr>
						</thead>
						<tbody>
						{
							this.state.notes.map(note => {
								return <Note note={note} />;
							  })
						}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Notes;



class Note extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			subject: props.note.subject,
			topic: props.note.topic,
			link : props.note.link
		}
	}

	render(){
		return <tr>
		<td data-label="first-name">{this.state.subject}</td>
		<td data-label="last-name">{this.state.topic}</td>
		<td data-label="email">
			{" "}
			<a
				href={this.state.link}
				download
			>
				Click to download
			</a>
		</td>
	</tr>
	}
}