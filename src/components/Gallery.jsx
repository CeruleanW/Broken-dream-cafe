import React, { Component } from "react";
// Features
	// Slide
	// click and enlarge
	// animation

const createImg = (imageClass, imageFileName, altText) => {
	return (
		<div className={imageClass}>
		<img
			src={
				process.env.PUBLIC_URL + "/images/" +
				imageFileName.toString()
			}
			alt={altText}
		/>
	</div>
	);
};

export default class Gallery extends Component {
	render() {
		return (
			<section className="gallery">
				<p>
					Breakfast menu: 8am - 11.30am, Mon-Fri. All day menu: 12noon
					- 10.30pm, Mon-Fri &amp; Sat from 5pm. Brunch menu: 9am -
					4pm, Sat &amp; Sun.
				</p>
				{createImg("food", "StockSnap_LF3YEO5Q13.jpg", "Pasta")}
				{createImg("coffee", "cup-of-coffee-close-up-picjumbo-com.jpg", "Cup of coffee")}
				{createImg("dessert", "StockSnap_OIWTQD6Y7U.jpg", "Dessert")}
				{createImg("tea", "sarah-gualtieri-ugOgKc43SEo-unsplash.jpg", "Tea")}
			</section>
		);
	}
}
