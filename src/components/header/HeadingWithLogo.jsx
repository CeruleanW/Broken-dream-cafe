import React from "react";
import logo128 from "../../images/logo128.png";
import { clientName } from '../Constants';
import {Image} from "semantic-ui-react";
import styles from "./Navbar.module.css";

const HeadingWithLogo = (props) => {
	return (
		<a href="/">
			<div className={styles.headingItemContainer}>
				<Image
					size="mini"
					src={logo128}
					alt="logo"
				/>
				<span className={styles.headingItemName}>{clientName}</span>
			</div>
		</a>
	);
};

export default HeadingWithLogo;
