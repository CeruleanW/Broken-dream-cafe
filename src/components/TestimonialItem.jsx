import React, { Component } from "react";

export default class TestimonialItem extends Component {
	render() {
		return (
			<div className="testimonial-item pure-g">
				<img
					src={
						process.env.PUBLIC_URL +
						"/images/" +
						this.props.imageFileName.toString()
					}
					alt={this.props.personName}
					className="pure-img pure-u-1-2 pure-u-md-1-5 pure-u-xl-1-12"
				/>
				<p className="name pure-u-1">{this.props.personName}</p>
				<p className="testimonial-content pure-u-1">{this.props.content}</p>
			</div>
		);
	}
}
