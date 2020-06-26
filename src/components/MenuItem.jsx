import React, { Component } from "react";

export default class MenuItem extends Component {
	render() {
		return (
			<div>
				<img
					className="menu-item"
					src={process.env.PUBLIC_URL + "/images/" + this.props.imageFileName.toString()}
					alt={this.props.itemName}
				/>
				<p className="menu-item-name">{this.props.itemName}</p>
				<p className="menu-item-price price">{"$" + this.props.price.toString()}</p>
				<p className="menu-item-description">
					{this.props.description}
				</p>
			</div>
		);
	}
}
