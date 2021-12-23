import React from "react";
import { Link } from "react-router-dom";
import "../style/styles.css";
import "../style/register.css";
import $ from 'jquery';

class Register extends React.Component{
    render (){
        return (
            <div className="Signup">
                <form action=" " method="post" >
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
                            <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <span className="fa fa-user"></span>
                                </span>
                            </div>
                            <input type="text" className="form-control" name="firstname" placeholder="First Name" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <span className="fa fa-user"></span>
                                </span>
                            </div>
                            <input type="text" className="form-control" name="lastname" placeholder="Last Name" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-paper-plane"></i>
                                </span>
                            </div>
                            <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
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
                            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <select id="select" className="form-control" aria-placeholder="Type of User" required="required">
                            <option>Student</option>
                            <option>Faculty</option>
                        </select>
                    </div>
                    <br />
                    <div className="form-group text-center">
                        <label className="form-check-label" />
                        <input type="checkbox" required="required" id="myCheckbox" /> I accept the <Link to="/terms">Terms of Use</Link> &amp; <Link to="/privacy">Privacy Policy</Link>
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary btn-lg" id="myButton" disabled>Register</button>
                        <script type="text/javascript">
                            $('#myCheckbox').click(function() {
                                $('#myButton').attr("disabled", !this.checked)
                            });
                        </script>
                    </div><br />
                    <div className="text-center" style={{ marginBottom: "10px" }}>Already have an account?<Link to="/login" >Login here</Link></div>
                </form >
            </div >
        )
    };
}

export default Register;
