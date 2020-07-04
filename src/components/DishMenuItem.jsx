import React, { Component } from "react";
import styles from "../css/DishMenu.module.css";

export default class DishMenuItem extends Component {
	render() {
		return (
			<div className={"pure-u-1 pure-u-md-1-2 " + styles.dishMenuItem}>
				<img
					className={"pure-img " + styles.dishImages}
					src={
						process.env.PUBLIC_URL +
						"/images/" +
						this.props.imageFileName.toString()
					}
					alt={this.props.itemName}
				/>
				<div className={styles.dishMenuItemText}>
					<p className={styles.dishMenuItemName}>
						{this.props.itemName}
					</p>
					<p className={styles.dishMenuItemPrice}>
						{"$" + this.props.price.toString()}
					</p>
					<p className={styles.dishMenuItemDescription}>
						{this.props.description}
					</p>
				</div>
			</div>
		);
	}
}
