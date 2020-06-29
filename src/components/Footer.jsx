import React, { Component } from "react";
import "../css/Footer.css"
export default class Footer extends Component {
	render() {
		return (
			<footer className="">
				<p className="slogan">
					At Broken Dream, there is no exclusion!
				</p>
				<div className="footer-copyright">
					{" "}
					&copy; Developed by
					<a
						href="https://github.com/WindforceYang"
						className="white-text my-name"
					>
						{" "}
						Yi Yang
					</a>
					.
				</div>
			</footer>
		);
	}
}
