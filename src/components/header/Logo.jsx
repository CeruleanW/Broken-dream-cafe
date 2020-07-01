import React from "react";
import logo128 from "../../images/logo128.png";
import {Image} from "semantic-ui-react";

const Logo = (props) => {
	return (
		<a href="/">
			<div className="header__logo">
				<Image
					size="mini"
					src={logo128}
					alt="logo"
					className="header__logo__img"
				/>
				<span className="header__logo__name">{props.clientName}</span>
			</div>
		</a>
	);
};

export default Logo;