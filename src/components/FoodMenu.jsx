import React, { Component } from "react";
import FoodMenuItem from "./FoodMenuItem";
import { LoremIpsum } from "lorem-ipsum";

// Animation Library: Framer Motion https://www.framer.com/motion/

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 7,
		min: 4,
	},
	wordsPerSentence: {
		max: 12,
		min: 6,
	},
});

export default class FoodMenu extends Component {
	render() {
		return (
			<section id={this.props.id} className="pure-g">
				<FoodMenuItem
					itemName="Chicken Parmigiana on a Bun"
					imageFileName="mark-deyoung-mjcJ0FFgdWI-unsplash.jpg"
					price={7.5}
					description={lorem.generateParagraphs(1)}
				/>
				<FoodMenuItem
					itemName="Garlic Butter Shrimp Pasta"
					imageFileName="StockSnap_30DIV2QY3M.jpg"
					price={8.5}
					description={lorem.generateParagraphs(1)}
				/>

				<FoodMenuItem
					itemName="Ultimate Muffins"
					imageFileName="StockSnap_FQ5PQADGZ2.jpg"
					price={5.5}
					description={lorem.generateParagraphs(1)}
				/>

				<FoodMenuItem
					itemName="Roasted Corn and Sausage Salad"
					imageFileName="StockSnap_XLQHKJKZSG.jpg"
					price={8.0}
					description={lorem.generateParagraphs(1)}
				/>

				<FoodMenuItem
					itemName="Classic French Toast"
					imageFileName="StockSnap_1JMLWSY55C.jpg"
					price={5.0}
					description={lorem.generateParagraphs(1)}
				/>

				<FoodMenuItem
					itemName="Sheet Pan Burgers and Fries"
					imageFileName="StockSnap_7QH4K6AESO.jpg"
					price={9.0}
					description={lorem.generateParagraphs(1)}
				/>
			</section>
		);
	}
}

