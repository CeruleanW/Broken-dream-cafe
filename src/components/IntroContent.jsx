import React, { Component } from "react";
import styles from "../css/Intro.module.css";
import { Grid, Button, Responsive } from "semantic-ui-react";
import {sectionIds} from "./Constants";

const menuHref = "#" + sectionIds["menu"];
const bookingHref = "#" + sectionIds["booking"];

const IntroButtons = (props) => {
    return (
		<div>
			<a href={menuHref} className={styles.btn}>
				<Button className={styles.btn}>See the Menu</Button>
			</a>
			<a href={bookingHref} className={styles.btn}>
				<Button className={styles.btn} positive >Book a Table</Button>
			</a>
		</div>
	);
};

class Desktop extends Component {
	render() {
		return (
			<div className={styles.content}>
				<Grid columns={2}>
					<Grid.Row>
						<Grid.Column verticalAlign="top" width={6}>
							<p>1455 Whaley Lane</p>
							<p>TORONTO</p>
							<p>416-777-7777</p>
						</Grid.Column>
						<Grid.Column verticalAlign="top" width={10}>
							<div>
								<p>Breakfast menu: 8am - 11.30am, Mon-Fri. </p>
								<p>
									All day menu: 12noon - 10.30pm, Mon-Fri
									&amp; Sat from 5pm.{" "}
								</p>
								<p>Brunch menu: 9am - 4pm, Sat &amp; Sun.</p>
							</div>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column verticalAlign="top" centered width={16}>
                            <IntroButtons />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

class Mobile extends Component {
	render() {
		return (
			<div className={styles.content}>
				<Grid columns={1}>
					<Grid.Row centered>
						<Grid.Column verticalAlign="top" width={15}>
							<p>1455 Whaley Lane</p>
							<p>TORONTO, ONTARIO</p>
							<p>416-777-7777</p>
							<div>
								<p>Breakfast menu: 8am - 11.30am, Mon-Fri. </p>
								<p>
									All day menu: 12noon - 10.30pm, Mon-Fri
									&amp; Sat from 5pm.{" "}
								</p>
								<p>Brunch menu: 9am - 4pm, Sat &amp; Sun.</p>
							</div>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column verticalAlign="top" width={15} >
                            <IntroButtons />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default class IntroContent extends Component {
	render() {
		return (
			<div>
				<Responsive minWidth={767}>
					<Desktop menuHref={menuHref} bookingHref={bookingHref} />
				</Responsive>
				<Responsive maxWidth={767}>
					<Mobile menuHref={menuHref} bookingHref={bookingHref} />
				</Responsive>
			</div>
		);
	}
}
