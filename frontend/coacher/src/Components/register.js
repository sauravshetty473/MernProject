import React from "react";
import { Link } from "react-router-dom";
import "../style/styles.css";
import "../style/register.css";
import axios from 'axios';
import { AxiosResponse, AxiosError } from 'axios'
import USER from "./UserLogin";
// import $ from 'jquery';

class Register extends React.Component{


    constructor(props) {
        super(props);
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeFirst = this.onChangeFirst.bind(this);
        this.onChangeLast = this.onChangeLast.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRepeat = this.onChangeRepeat.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        

        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          repeat: '',
          type: 'Student',
        }
      }

      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
        console.log(e.target.value)
      }
    
      onChangeFirst(e) {
        this.setState({
          firstname: e.target.value
        })
      }

      onChangeLast(e) {
        this.setState({
          lastname: e.target.value
        })
      }

      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
      }

      onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
      }

      onChangeRepeat(e) {
        this.setState({
          repeat: e.target.value
        })
      }

      
      onChangeType(e) {
        this.setState({
          type: e.target.value
        })
      }



      onSubmit(e) {
        console.log("hello");
        e.preventDefault();
    
        const user = {
          username: this.state.username,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          password: this.state.password,
          type: this.state.type,
        }
    
        console.log(user);
    
        axios.post('http://localhost:5000/users/add', user)
        .then((res)=>{
            if(Math.floor(res.status/100) == 2){
                console.log("success");
                USER.username = this.state.username;
                USER.email = this.state.email;

                window.location = '/';
              
            }
        });
  
      }

      
    render (){
        return (
            <div className="Signup">

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
                            <input type="text" className="form-control" name="username" placeholder="Username" required="required" onChange={this.onChangeUsername}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <span className="fa fa-user"></span>
                                </span>
                            </div>
                            <input type="text" className="form-control" name="firstname" placeholder="First Name" required="required" onChange={this.onChangeFirst}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <span className="fa fa-user"></span>
                                </span>
                            </div>
                            <input type="text" className="form-control" name="lastname" placeholder="Last Name" required="required" onChange={this.onChangeLast}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-paper-plane"></i>
                                </span>
                            </div>
                            <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" onChange={this.onChangeEmail}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input type="password" className="form-control" name="password" placeholder="Password" required="required" onChange={this.onChangePassword}/>
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
                            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"  onChange={this.onChangeRepeat}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <select id="select" className="form-control" aria-placeholder="Type of User" required="required"  onSelect={this.onChangeType}>
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
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
          
          <br />
                    <div className="text-center" style={{ marginBottom: "10px" }}>Already have an account?<Link to="/login" >Login here</Link></div>
                </form >
            </div >
        )
    };
}

export default Register;
