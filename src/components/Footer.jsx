import React, { Component } from "react";
import "../css/Footer.css"
// https://www.npmjs.com/package/react-sticky-footer
import StickyFooter from 'react-sticky-footer';
export default class Footer extends Component {
	render() {
		return (
			<StickyFooter
				bottomThreshold={50}
				normalStyles={{
					backgroundColor: "#1b2024",
					padding: "1rem",
					color: "#ffffff",
					font: "300 0.8rem 'Lora', serif",
				}}
				stickyStyles={{
					backgroundColor: "rgba(255,255,255,.8)",
					padding: "1rem",
					font: "300 1rem 'Lora', serif",
				}}
				onFooterStateChange={false}
			>
				<div className="footer-copyright center">
					{" "}
					Copyright &copy; 2020 <s>{this.props.clientName}</s> Developed with ❤️ by
					<a
						href="https://github.com/CeruleanW"
						className="white-text footer__link"
					>
						{" "}
						Yi Yang
					</a>
					.
				</div>
			</StickyFooter>

			// <footer className="footer-distributed">
			// 	<p className="slogan">
			// 		At Broken Dream, there is no exclusion!
			// 	</p>

			// </footer>
		);
	}
}
