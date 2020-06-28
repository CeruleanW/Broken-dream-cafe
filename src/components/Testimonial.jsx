import React, { Component } from "react";
import TestimonialItem from "./TestimonialItem";

export default class Testimonial extends Component {
	render() {
		return (
			<section className="testimonial">
				<TestimonialItem
					personName="Nancy Huber"
					content="Great coffee and unique sandwiches in a comfortable environment right near the cross of Kings avenue."
					imageFileName="person1.jpg"
				/>

				<TestimonialItem
					personName="Elliot Mclellan"
					content="What I like about BentoBox is that the platform makes
						it easier for the restaurant user—the support team is
						helpful and really took a load off of our plate."
					imageFileName="person2.jpg"
				/>

				<TestimonialItem
					personName="Randall Whitaker"
					content="I loved everything in the coffee shop, I'm from Puerto
					Rico I stopped the day I returned from my stay in Canada
					with my family and I loved the coffee and the person who
					treated us very kindly, I think it was the owner
					beautiful town and very nice people I plan to return and
					make a stop at your place to try your coffee once again
					, greetings from Puerto Rico .. God bless you"
					imageFileName="person3.jpg"
				/>

				<TestimonialItem
					personName="Jarod Brown"
					content="I like it a Latte! Excellent service, delicious
					caffienated beverages and clean/calm atmosphere."
					imageFileName="person4.jpg"
				/>
			</section>
		);
	}
}
