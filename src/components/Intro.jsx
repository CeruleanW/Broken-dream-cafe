import React, { Component } from "react";
// set the background image in CSS
export default class Intro extends Component {
	render() {
		const menuHref = "#" + this.props.ids["menu"];
		const bookingHref = "#" + this.props.ids["booking"];

		return (
			<section className="intro">
				<div>
					<p className="slogan">Don't push your love too far in in</p>
					<h1>Welcome to {this.props.clientName}</h1>
					<p>1455 Whaley Lane</p>
					<p>TORONTO</p>
					<p>416-777-7777</p>
					<a href={menuHref}>
						<button className="pure-button">See the Menu</button>
					</a>
					<a href={bookingHref}>
						<button className="pure-button">Book a Table</button>
					</a>
				</div>
			</section>
		);
	}
}
