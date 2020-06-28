import React, { Component } from "react";
// Features
// Slide
// click and enlarge
// animation

const GalleryImg = (props) => {
	return (
		<div className="pure-u-1-2">
			<img
				src={
					process.env.PUBLIC_URL +
					"/images/" +
					props.imageFileName.toString()
				}
				alt={props.altText}
				className="pure-img"
			/>
		</div>
	);
};

export default class Gallery extends Component {
	render() {
		return (
			<section className="gallery">
				<div className><p>Operating Hours</p>
				<p>Breakfast menu: 8am - 11.30am, Mon-Fri. </p>
				<p>All day menu: 12noon - 10.30pm, Mon-Fri &amp; Sat from 5pm.{" "}</p>
				<p>Brunch menu: 9am - 4pm, Sat &amp; Sun.</p></div>

				<div className="pure-g">
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
