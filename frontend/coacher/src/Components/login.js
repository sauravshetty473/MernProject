import React from "react";
import { Link } from "react-router-dom";
import "../style/styles.css";
import "../style/login.css";
import $ from 'jquery';

class Login extends React.Component {
    render () {
        return(
            <div className ="Login">
                <form action=" " method="post" >
                <h2>Login</h2>
                    <br />
                    <hr/>
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
                                    <i className="fa fa-lock"></i>
                                </span>                    
                            </div>
                            <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                        </div>
                    </div>
                    <br />
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary btn-lg" id="myButton">Login</button>
                    </div><br />
                    <div className="text-center" style={{ marginBottom: "10px", color:"purple" }}>Don't have an account? <Link to="/register" style= {{ textDecoration:"none" }}>Register here</Link></div>
                </form >
            </div >
        )
    };
}

export default Login;