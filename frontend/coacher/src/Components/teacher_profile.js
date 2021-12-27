import React from "react"
import { Link } from "react-router-dom"
import Navbar from "./navbar";
import "../style/styles.css";

class Teacher_Profile extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="col-md-10">
                    <div className="content-section mt-5">
                    <br/>
                    <div className="media" style={{width:"600px"}}><br/>
                        <img className="rounded-circle account-img" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <div className="media-body"><br/>
                        <h2 className="account-heading" style={{fontFamily:"'Noto Serif JP', serif", fontWeight:"600"}}>Some username</h2>
                        <p className="text-secondary" style={{fontFamily:"'Noto Serif JP', serif"}}>Some email</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default Teacher_Profile;

