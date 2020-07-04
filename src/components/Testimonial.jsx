import React, { Component } from "react";
import TestimonialItem from "./TestimonialItem";
import AliceCarousel from "react-alice-carousel"; // Lib URL: https://www.npmjs.com/package/react-alice-carousel
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "../css/Testimonial.module.css";

// Alternative carousel lib: https://www.npmjs.com/package/react-responsive-carousel
export default class Testimonial extends Component {
	render() {
		const testimonialItems = [
			<TestimonialItem
				personName="Nancy Huber"
				content="Great coffee and unique sandwiches in a comfortable environment right near the cross of Kings avenue."
				imageFileName="person1.jpg"
			/>,

			<TestimonialItem
				personName="Elliot Mclellan"
				content="What I like about BentoBox is that the platform makes
			it easier for the restaurant user—the support team is
			helpful and really took a load off of our plate."
				imageFileName="person2.jpg"
			/>,

			<TestimonialItem
				personName="Randall Whitaker"
				content="I'm from Puerto Rico I stopped the day I returned from my stay in Canada
		with my family and I loved the coffee and the person who
		treated us very kindly. I plan to return and try your coffee once again. God bless you"
				imageFileName="person3.jpg"
			/>,

			<TestimonialItem
				personName="Jarod Brown"
				content="I like it a Latte! Excellent service, delicious
		caffienated beverages and clean/calm atmosphere."
				imageFileName="person4.jpg"
			/>,
		];

		return (
			<section className={styles.section}>
				{/* <AliceCarousel mouseTrackingEnabled autoHeight items={testimonialItems} fadeOutAnimation autoPlay autoPlayInterval="7000" > */}
				<AliceCarousel
					mouseTrackingEnabled
					items={testimonialItems}
					fadeOutAnimation
					autoHeight
				></AliceCarousel>
			</section>
		);
	}
}
