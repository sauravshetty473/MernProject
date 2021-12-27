import React from "react";
import { Link } from "react-router-dom";
import "../style/styles.css";
import "../style/login.css";
<<<<<<< HEAD
import $ from 'jquery';
import USER from "./UserLogin";
import axios from 'axios';
import "./GlobalVariable";
=======
// import $ from 'jquery';
>>>>>>> 46abbf53a618a7f86a159193d568df2a9aae956f

class Login extends React.Component {

    constructor(props) {
        super(props);
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          password: '',
        }
      }



      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
        console.log(e.target.value)
      }
    
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
      }


      onSubmit(e) {

        const user = {
            username: this.state.username,
            password: this.state.password,
          }
    
    
        axios.post('http://localhost:5000/users/', user)
        .then(response => {
          if (response.data.length > 0) {

            localStorage.username = this.state.username
            localStorage.email = response.data[0].email
            console.log(window.$user)
            window.location = '/';
          }
        })
        .catch((error) => {
          console.log(error);
        })
  
      }




    render () {
        return(
            <div className ="Login">
               <form onSubmit={this.onSubmit}>
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
                            <input type="text" className="form-control" name="username" placeholder="Username" required="required"  onChange={this.onChangeUsername} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>                    
                            </div>
                            <input type="password" className="form-control" name="password" placeholder="Password" required="required"  onChange={this.onChangePassword}/>
                        </div>
                    </div>
                    <br />
                    <div className="form-group text-center">
            <input type="submit" value="LOGIN" className="btn btn-primary" />
          </div><br />
                    <div className="text-center" style={{ marginBottom: "10px", color:"purple" }}>Don't have an account? <Link to="/register" style= {{ textDecoration:"none" }}>Register here</Link></div>
                </form >
            </div >
        )
    };
}

export default Login;