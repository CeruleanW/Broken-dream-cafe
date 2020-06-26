import React, { Component } from "react";
// set the background image in CSS
export default class Intro extends Component {
	render() {
		const menuHref = "#" + this.props.ids["menu"];
		const bookingHref = "#" + this.props.ids["booking"];
		const srcSetValue =
			process.env.PUBLIC_URL +
			"/images/StockSnap_DW4W4JKS9I-small.jpg 960w" +
			", " +
			process.env.PUBLIC_URL +
			"/images/StockSnap_DW4W4JKS9I-large.jpg 1920w";

		return (
			<section className="intro">
				<div>
					<p>Don't push your love too far in in</p>
					<h1>Broken Dream Café</h1>
					<p>1455 Whaley Lane</p>
					<p>TORONTO</p>
					<p>416-777-7777</p>
					<a href={menuHref}>
						<button>See the Menu</button>
					</a>
					<a href={bookingHref}>
						<button>Book a Table</button>
					</a>
				</div>
			</section>
		);
	}
}


// <div>
// <img
// 	src={
// 		process.env.PUBLIC_URL +
// 		"/images/StockSnap_DW4W4JKS9I-large.jpg"
// 	}
// 	alt="Broken Dream Café"
// 	srcSet={srcSetValue}
// 	sizes="(max-width: 1080px) 960px, 1920px"
// 	className="title-image"
// />
// </div>