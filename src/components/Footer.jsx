import React, { Component } from "react";
import "../css/layout.css";
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
					font: "300 0.9rem 'Lora', serif",
				}}
				stickyStyles={{
					backgroundColor: "rgba(255,255,255,.8)",
					padding: "1rem",
					font: "300 1rem 'Lora', serif",
				}}
			>
				<div className="center">
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
		);
	}
}
