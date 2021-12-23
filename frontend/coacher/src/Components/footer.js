import React, { Component } from "react";
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
								<li>About</li>
								<li>Mission</li>
								<li>Services</li>
								<li>Social</li>
								<li>Get in touch</li>
							</ul>
						</div>
						<div class="col">
							<h1>Products</h1>
							<ul>
								<li>About</li>
								<li>Mission</li>
								<li>Services</li>
								<li>Social</li>
								<li>Get in touch</li>
							</ul>
						</div>
						<div class="col">
							<h1>Accounts</h1>
							<ul>
								<li>About</li>
								<li>Mission</li>
								<li>Services</li>
								<li>Social</li>
								<li>Get in touch</li>
							</ul>
						</div>
						<div class="col">
							<h1>Resources</h1>
							<ul>
								<li>Webmail</li>
								<li>Redeem code</li>
								<li>WHOIS lookup</li>
								<li>Site map</li>
								<li>Web templates</li>
								<li>Email templates</li>
							</ul>
						</div>
						<div class="col">
							<h1>Support</h1>
							<ul>
								<li>Contact us</li>
								<li>Web chat</li>
								<li>Open ticket</li>
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
