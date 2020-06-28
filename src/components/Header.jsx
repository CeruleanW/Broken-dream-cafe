import React, { Component } from "react";
import logo128 from "../images/logo128.png"

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
export default class Header extends Component {
	render() {
		return (
			<header id={this.props.id}>
				<div className="custom-wrapper">
					<nav className="pure-menu pure-menu-horizontal custom-can-transform">
						<div className="pure-menu-heading pure-u-1 pure-u-md-1-3">
							<img src={logo128} alt="logo" className="pure-img"/>
							{/* this image should be inline */}
							<span>{this.props.clientName}</span>
						</div>
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
					</nav>
				</div>
			</header>
		);
	}
}
