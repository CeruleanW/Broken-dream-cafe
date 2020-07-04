import React, { Component } from "react";
import styles from "../css/Intro.module.css";
import { Grid as div } from "semantic-ui-react";

// set the background image in CSS
export default class Intro extends Component {
	render() {
		const menuHref = "#" + this.props.ids["menu"];
		const bookingHref = "#" + this.props.ids["booking"];

		return (
			<section className={styles.intro}>
				<div className={styles.container}>
					<p className="slogan">Don't push your love too far in in</p>
					<h1 className={styles.heading}>
						Welcome to {this.props.clientName}
					</h1>
					<div className={styles.content}>
						<div className={styles.contentLeft}><p>1455 Whaley Lane</p>
						<p>TORONTO</p>
						<p>416-777-7777</p></div>

						<div className={styles.contentRight}>
							<p>Operating Hours</p>
							<p>Breakfast menu: 8am - 11.30am, Mon-Fri. </p>
							<p>
								All day menu: 12noon - 10.30pm, Mon-Fri &amp;
								Sat from 5pm.{" "}
							</p>
							<p>Brunch menu: 9am - 4pm, Sat &amp; Sun.</p>
						</div>
						<a href={menuHref}>
							<button className="pure-button">
								See the Menu
							</button>
						</a>
						<a href={bookingHref}>
							<button className="pure-button">
								Book a Table
							</button>
						</a>
					</div>
				</div>
			</section>
		);
	}
}
