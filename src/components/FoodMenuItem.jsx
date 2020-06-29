import React, { Component } from "react";

export default class FoodMenuItem extends Component {
	render() {
		return (
			<div className="pure-u-1-2">
				<img
					className="menu-item pure-img pure-u-1-5"
					src={
						process.env.PUBLIC_URL +
						"/images/" +
						this.props.imageFileName.toString()
					}
					alt={this.props.itemName}
				/>
				<div className="pure-u-4-5">
					<span className="menu-item-name">
						{this.props.itemName}
					</span>
					<span className="menu-item-price price">
						{"$" + this.props.price.toString()}
					</span>
					<p className="menu-item-description ">
						{this.props.description}
					</p>
				</div>
			</div>
		);
	}
}
