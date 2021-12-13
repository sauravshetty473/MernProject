import React from "react"
import { Link } from "react-router-dom"
import Navbar from "./navbar";  
import "../style/styles.css";
import "../style/contact.css";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <section id="contact">
                <br/>
                <div className="section-title">
                    <h3 style= {{fontFamily: "'Raleway', 'sans-serif'"}}>Contact <span style={{color: "#0d58ba"}}>Us</span> </h3>
                </div><br/>
                    <div className="mt-4" style={{textAlign: "center", margin: "0 auto"}}>
                        <div className="col-lg-8">
                            <form role="form" action="" method="POST" className="message-form" style={{textAlign:"center", marginLeft: "25%"}}>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input className="form-control" type="text" placeholder="Your Full Name"/>
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input className="form-control" type="text" placeholder="Your Email-Id"/> 
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" type="text" rows="6" placeholder="Type your Feedback/Query here..."/>
                                </div>
                                <div className="mt-4 text-center">
                                    <button type="submit" btn>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;