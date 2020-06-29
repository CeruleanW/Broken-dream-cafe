import React, { Component } from "react";
import logo128 from "../images/logo128.png";
import "../css/Nav.css";
// import ReactNavbar from "react-responsive-animate-navbar";
// import NavAnimation from './NavAnimation';

// "Icon made by monkik from www.flaticon.com"

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

const Logo = (props) => {
	return (
		<div className="pure-menu logo">
			<img
				src={logo128}
				alt="logo"
				className="pure-img header__logo__img"
			/>
			{/* this image should be inline */}
			<div className="header__logo__name pure-menu-heading">{props.clientName}</div>
		</div>
	);
};
export default class Header extends Component {
	render() {
		return (
			<header>
				<nav id={this.props.id} className="pure-g">
					<div className="pure-u-1 pure-u-md-1-5">
						<Logo clientName={this.props.clientName} />
					</div>
					<div className="pure-u-1 pure-u-md-4-5">
						<div className="pure-menu">
							<ul className="pure-menu-list">
								<ListItem
									text="About Us"
									hrefId={this.props.ids["aboutUs"]}
								/>
								<ListItem
									text="Menu"
									hrefId={this.props.ids["menu"]}
								/>
								<ListItem text="Catering" />
								<ListItem text="Events" />
								<ListItem
									text="Book a Table"
									hrefId={this.props.ids["booking"]}
								/>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}
