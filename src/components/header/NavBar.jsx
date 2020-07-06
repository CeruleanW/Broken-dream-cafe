import React, { Component } from "react";
import _ from "lodash";
import { Sticky, Menu, Dropdown, Responsive } from "semantic-ui-react";
import HeadingWithLogo from "./HeadingWithLogo";
import styles from "./Navbar.module.css";

const BaseMenu = (props) => {
	return (
		<div>
			<Menu fixed="top" inverted >
				<Menu.Header className={styles.headingItemContainer}>
					<HeadingWithLogo />
				</Menu.Header>
				{props.children}
			</Menu>
			{/* <NavBarChildren>{children}</NavBarChildren> */}
		</div>
	);
};

const Mobile = (props) => {
	return (
		<BaseMenu>
			<Dropdown item inline icon="bars" direction="left">
				<Dropdown.Menu>
					{_.map(props.leftItems, (item) => (
						<Dropdown.Item {...item} />
					))}
					{_.map(props.rightItems, (item) => (
						<Dropdown.Item {...item} />
					))}
				</Dropdown.Menu>
			</Dropdown>
		</BaseMenu>
	);
};

const Desktop = (props) => {
	return (
		<div>
			<Menu fixed="top" inverted stackable>
				<Menu.Item>
					<HeadingWithLogo />
				</Menu.Item>
				{_.map(props.leftItems, (item) => (
					<Menu.Item {...item} />
				))}
				<Menu.Menu position="right">
					{_.map(props.rightItems, (item) => (
						<Menu.Item {...item} />
					))}
				</Menu.Menu>
			</Menu>
			{/* <NavBarChildren>{children}</NavBarChildren> */}
		</div>
	);
};

class NavBar extends Component {
	render() {
		const { leftItems, rightItems } = this.props;

		return (
			<div className={styles.fixedProblem}>
				<Responsive minWidth={767}>
					<Desktop leftItems={leftItems} rightItems={rightItems} />
				</Responsive>
				<Responsive maxWidth={767}>
					<Mobile leftItems={leftItems} rightItems={rightItems} />
				</Responsive>
			</div>
		);
	}
}

// const NavBarChildren = ({ children }) => (
// 	<Container style={{ marginTop: "6em" }}>{children}</Container>
// );

export default NavBar;
