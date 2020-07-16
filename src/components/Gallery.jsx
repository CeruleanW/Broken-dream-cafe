import React, { Component } from "react";
import styles from "../css/Gallery.module.css";

const GalleryImg = (props) => {
	return (
		<div className={"pure-u-1-2 " + styles.card}>
			<img
				src={
					process.env.PUBLIC_URL +
					"/images/" +
					props.imageFileName.toString()
				}
				alt={props.altText}
				className="pure-img"
			/>
			<div className={styles.cardHead}>{props.altText}</div>
		</div>
	);
};

export default class Gallery extends Component {
	render() {
		return (
			<section className={styles.sectionContainer}>
				<div className={"pure-g " + styles.container}>
					<GalleryImg
						imageFileName="StockSnap_LF3YEO5Q13.jpg"
						altText="Pasta"
					/>
					<GalleryImg
						imageFileName="cup-of-coffee-close-up-picjumbo-com.jpg"
						altText="Cup of coffee"
					/>
					<GalleryImg
						imageFileName="StockSnap_OIWTQD6Y7U.jpg"
						altText="Dessert"
					/>
					<GalleryImg
						imageFileName="sarah-gualtieri-ugOgKc43SEo-unsplash.jpg"
						altText="Tea"
					/>
				</div>
			</section>
		);
	}
}
