import React, { Component } from "react";
import styles from "../css/Intro.module.css";
import IntroContent from "./IntroContent";

// set the background image in CSS
export default class Intro extends Component {
	render() {
		return (
			<section className={styles.intro}>
				<div className={styles.container}>
					{/* <p className="slogan">Don't push your love too far in in</p> */}
					<h1 className={styles.heading}>
						Welcome to {this.props.clientName}
					</h1>
				</div>
				<IntroContent ids={this.props.ids}/>
			</section>
		);
	}
}
