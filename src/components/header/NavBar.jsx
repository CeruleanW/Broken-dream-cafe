import React, { Component } from "react";
import _ from "lodash";
import { Container, Menu } from "semantic-ui-react";

import "./Navbar.module.css";

class NavBar extends Component {
	render() {
		const { children, leftItems, rightItems, heading } = this.props;

		return (
			<div>
				<Menu fixed="top" inverted stackable>
					<Menu.Item>{heading}</Menu.Item>
					{_.map(leftItems, (item) => (
						<Menu.Item {...item} />
					))}
					<Menu.Menu position="right">
						{_.map(rightItems, (item) => (
							<Menu.Item {...item} />
						))}
					</Menu.Menu>
				</Menu>
				<NavBarChildren>{children}</NavBarChildren>
			</div>
		);
	}
}


const NavBarChildren = ({ children }) => (
	<Container style={{ marginTop: "6em" }}>{children}</Container>
);

export default NavBar;
