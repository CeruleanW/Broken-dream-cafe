import React, { Component } from "react";
import styles from "../css/Testimonial.module.css";
import octogon from "../images/octogon.svg";

export default class TestimonialItem extends Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.portrait}>
					<img
						src={
							process.env.PUBLIC_URL +
							"/images/" +
							this.props.imageFileName.toString()
						}
						alt={this.props.personName}
						className={
							"pure-img"
						}
					/>
				</div>
				<div className={styles.quote}>
					<p className="testimonial-content pure-u-1">
						{this.props.content}
					</p>
					<cite className="pure-u-1">{this.props.personName}</cite>
				</div>
			</div>
		);
	}
}
