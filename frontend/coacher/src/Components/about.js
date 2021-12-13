import React from "react"
import { Link } from "react-router-dom"
import Navbar from "./navbar";
import "../style/styles.css"
import "../style/about.css";

class About extends React.Component {
    render() {
        return (
            <div>
                <br/><br/>
                <section className="header1 cid-qyvisAZ1Bw" id="header1-7" data-rv-view="758">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="mbr-white col-md-10">
                                <h3 className="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-2">ABOUT US</h3>
                                <p className="mbr-text align-center pb-3 mbr-fonts-style display-5">
                                    We are all very different. We were born in different cities, at different times, we love different music, food, movies. But we have something that unites us all. It is our company. We are its heart. We are not just a team, we are a family.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features1 cid-qyvcAqZyNq" id="features1-1" data-rv-view="764">
                    <div className="container">
                        <div className="media-container-row">

                            <div className="card p-3 col-12 col-md-6 col-lg-4">
                                <div className="card-img pb-3">
                                    <span className="mbr-iconfont mbri-users" style={{color:"rgb(0,0,0)"}} media-simple="true"></span>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-title py-3 mbr-fonts-style display-5">
                                        Creativity</h4>
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        It's the ability to think outside the box. We make decisions, create something new and generate a lot of ideas.
                                    </p>
                                </div>
                            </div> 

                            <div className="card p-3 col-12 col-md-6 col-lg-4">
                                <div className="card-img pb-3">
                                    <span className="mbr-iconfont mbri-globe" style={{color:"rgb(0,0,0)"}} media-simple="true"></span>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-title py-3 mbr-fonts-style display-5">
                                        Worldwide</h4>
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        All sites you make with Mobirise are mobile-friendly. You don't have to create a special mobile version of your site.
                                    </p>
                                </div>
                            </div>

                            <div className="card p-3 col-12 col-md-6 col-lg-4">
                                <div className="card-img pb-3">
                                    <span className="mbr-iconfont mbri-smile-face" style={{color:"rgb(0,0,0)"}} media-simple="true"></span>
                                </div>
                                <div className="card-box">
                                    <h4 className="card-title py-3 mbr-fonts-style display-5">
                                        Unique Styles
                                    </h4>
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Mobirise offers many site blocks in several themes, and though these blocks are pre-made, they are flexible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
            </div>
        );
    }
}

export default About;