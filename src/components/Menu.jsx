import React, { Component } from "react";
import MenuItem from "./MenuItem";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4,
	},
	wordsPerSentence: {
		max: 16,
		min: 6,
	},
});

export default class Menu extends Component {
	render() {
		return (
			<section className="menu" id={this.props.id}>
				<MenuItem
					itemName="Chicken Parmigiana on a Bun"
					imageFileName="mark-deyoung-mjcJ0FFgdWI-unsplash.jpg"
					price={7.5}
					description={lorem.generateParagraphs(1)}
				/>
				<MenuItem
					itemName="Garlic Butter Shrimp Pasta"
					imageFileName="StockSnap_30DIV2QY3M.jpg"
					price={8.5}
					description={lorem.generateParagraphs(1)}
				/>

				<MenuItem
					itemName="Ultimate Muffins"
					imageFileName="StockSnap_FQ5PQADGZ2.jpg"
					price={5.5}
					description={lorem.generateParagraphs(1)}
				/>

				<MenuItem
					itemName="Roasted Corn and Sausage Salad"
					imageFileName="StockSnap_XLQHKJKZSG.jpg"
					price={8.0}
					description={lorem.generateParagraphs(1)}
				/>

				<MenuItem
					itemName="Classic French Toast"
					imageFileName="StockSnap_1JMLWSY55C.jpg"
					price={5.0}
					description={lorem.generateParagraphs(1)}
				/>

				<MenuItem
					itemName="Sheet Pan Burgers and Fries"
					imageFileName="StockSnap_7QH4K6AESO.jpg"
					price={9.0}
					description={lorem.generateParagraphs(1)}
				/>
			</section>
		);
	}
}
