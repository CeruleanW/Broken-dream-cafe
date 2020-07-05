import React, { Component } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

// "Icon made by monkik from www.flaticon.com"
// Revised from https://stackoverflow.com/questions/46301850/how-to-recreate-auto-collapasable-menu-with-semantic-ui-for-react

// name, linkId
const ListItem = (props) => {
	const link = props.hrefId ? "#" + props.hrefId : "#";
	return (
		<li className="nav-li pure-menu-item">
			<a href={link} className="pure-menu-link">
				{props.text}
			</a>
		</li>
	);
};

export default class Header extends Component {
	render() {
		const leftItems = [
			{ as: "a", content: "About Us", key: "aboutUs", href: "#" + this.props.ids["aboutUs"] },
			{ as: "a", content: "Menu", key: "menu", href: "#" + this.props.ids["menu"] },
			{ as: "a", content: "Catering", key: "catering" },
			{ as: "a", content: "Events", key: "events" }
		];
		
		const rightItems = [
			{ as: "a", content: "Book a Table", key: "booking", href: "#" + this.props.ids["booking"] },
		];

		return (
			<header>
				<NavBar
					leftItems={leftItems}
					rightItems={rightItems}
					heading={<Logo clientName={this.props.clientName} />}
				>
				</NavBar>
			</header>
		);
	}
}