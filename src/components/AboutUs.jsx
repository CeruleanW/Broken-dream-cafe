import React, { Component } from "react";
import { Header, Image, Container as div } from "semantic-ui-react";
import logo from "../images/logo512.png";
import bgImage from "../images/StockSnap_UKPXEXD4TT.jpg"
import styles from "../css/AboutUs.module.css";

export default class AboutUs extends Component {
	render() {
		return (
			<section className={styles.section} id={this.props.id}>
				<div className={styles.container} >
					<Header
						as="h2"
						icon
						textAlign="center"
					>
						<Image src={logo} circular />
						<Header.Content className={styles.title} >{this.props.clientName}</Header.Content>
					</Header>
					<img src={bgImage} alt="Background" />
					<p className={styles.introText}>
						Since 1874 when Despa Maecenas and his wife Vivian
						opened the Broken Dream Cafe, cozy experience was always
						behind this brand. Over the past fifteen years, coffee
						lovers across Canada have continued to watch Broken
						Dream Cafe make no exceptions to the passion and
						commitment of providing the world’s most relaxing and
						comfortable cafe. Broken Dream only purchases the top
						5-10% of the world’s finest Arabica beans that are
						custom roasted in small batches to guarantee taste and
						freshness.
					</p>
					<div className={styles.bar}></div>
				</div>
			</section>
		);
	}
}
