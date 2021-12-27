import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";

export default class Footer extends Component {
	render() {
		return (
			<div>
				<div class="dummy_page"></div>
				<div class="footer">
					<div class="contain">
						<div class="col">
							<h1>Company</h1>
							<ul>
								<li><Link to="/about" className="link" style={{color: "#999999", textDecoration:"none"}}>About</Link></li>
								<li><Link to="" className="link" style={{color: "#999999",textDecoration:"none" }}>Careers</Link></li>
								<li><Link to="/faq" className="link" style={{color: "#999999", textDecoration:"none" }}>FAQ</Link></li>
								<li><Link to="/tnc" className="link" style={{color: "#999999", textDecoration:"none" }}>Terms & Conditions</Link></li>
								<li><Link to="/privacy" className="link" style={{color: "#999999", textDecoration:"none" }}>Privacy Policy</Link></li>
							</ul>
						</div>
						<div class="col">
							<h1>Products</h1>
							<ul>
								<li><Link to="/about" className="link" style={{color: "#999999", textDecoration:"none" }}>About</Link></li>
								<li><Link to="" className="link" style={{color: "#999999", textDecoration:"none" }}>Careers</Link></li>
								<li><Link to="/faq" className="link" style={{color: "#999999", textDecoration:"none" }}>FAQ</Link></li>
								<li><Link to="/tnc" className="link" style={{color: "#999999", textDecoration:"none" }}>Terms & Conditions</Link></li>
								<li><Link to="/privacy" className="link" style={{color: "#999999", textDecoration:"none" }}>Privacy Policy</Link></li>
							</ul>
						</div>
						<div class="col">
							<h1>Accounts</h1>
							<ul>
								<li><Link to="/about" className="link" style={{color: "#999999", textDecoration:"none" }}>About</Link></li>
								<li><Link to="" className="link" style={{color: "#999999", textDecoration:"none" }}>Careers</Link></li>
								<li><Link to="/faq" className="link" style={{color: "#999999", textDecoration:"none" }}>FAQ</Link></li>
								<li><Link to="/tnc" className="link" style={{color: "#999999", textDecoration:"none" }}>Terms & Conditions</Link></li>
								<li><Link to="/privacy" className="link" style={{color: "#999999", textDecoration:"none"}}>Privacy Policy</Link></li>
							</ul>
						</div>
						<div class="col">
							<h1>Resources</h1>
							<ul>
								<li style={{color: "#999999" }}>Webmail</li>
								<li style={{color: "#999999" }}>Redeem code</li>
								<li style={{color: "#999999" }}>WHOIS lookup</li>
								<li style={{color: "#999999" }}>Site map</li>
								<li style={{color: "#999999" }}>Web templates</li>
								<li style={{color: "#999999" }}>Email templates</li>
							</ul>
						</div>
						<div class="col">
							<h1>Support</h1>
							<ul>
								<li style={{color: "#999999" }}>Contact us</li>
								<li style={{color: "#999999" }}>Web chat</li>
								<li style={{color: "#999999" }}>Open ticket</li>
							</ul>
						</div>
						<div class="col social">
							<h1>Social</h1>
							<ul>
								<li>
									<img
										src="https://www.pinclipart.com/picdir/big/150-1504080_facebook-white-facebook-white-icon-png-2018-clipart.png"
										width="32"
									/>
								</li>
								<li>
									<img
										src="https://www.pngkey.com/png/full/11-111779_share-on-twitter-twitter-icon-white-no-background.png"
										width="32"
									/>
								</li>
								<li>
									<img
										src="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-white-border-icon-png-large.png"
										width="32"
									/>
								</li>
							</ul>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		);
	}
}
