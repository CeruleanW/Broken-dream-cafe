import React, { Component } from "react";
import DishMenuItem from "./DishMenuItem";
import { LoremIpsum } from "lorem-ipsum";
import styles from "../css/DishMenu.module.css";

// Animation Library: Framer Motion https://www.framer.com/motion/

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 4,
		min: 2,
	},
	wordsPerSentence: {
		max: 7,
		min: 5,
	},
});

const Title = () => {
	return (
		<div className={styles.titleContainer}>
			<p className={styles.subtitle}>Popular Dishes</p>
			<h2 className={styles.title}>From Our Menu</h2>
		</div>
	);
};

export default class DishMenu extends Component {
	render() {
		return (
			<section
				id={this.props.id}
				className={"pure-g " + styles.sectionBlock}
			>
				<div className={styles.center}>
					<Title />
					<div className={styles.dishMenuContainer}><DishMenuItem
					itemName="Chicken Parmigiana on a Bun"
					imageFileName="mark-deyoung-mjcJ0FFgdWI-unsplash.jpg"
					price={7.5}
					description={lorem.generateParagraphs(1)}
					/>
					<DishMenuItem
					itemName="Garlic Butter Shrimp Pasta"
					imageFileName="StockSnap_30DIV2QY3M.jpg"
					price={8.5}
					description={lorem.generateParagraphs(1)}
					/>
					
					<DishMenuItem
					itemName="Ultimate Muffins"
					imageFileName="StockSnap_FQ5PQADGZ2.jpg"
					price={5.5}
					description={lorem.generateParagraphs(1)}
					/>
					
					<DishMenuItem
					itemName="Roasted Corn and Sausage Salad"
					imageFileName="StockSnap_XLQHKJKZSG.jpg"
					price={8.0}
					description={lorem.generateParagraphs(1)}
					/>
					
					<DishMenuItem
					itemName="Classic French Toast"
					imageFileName="StockSnap_1JMLWSY55C.jpg"
					price={5.0}
					description={lorem.generateParagraphs(1)}
					/>
					
					<DishMenuItem
					itemName="Sheet Pan Burgers and Fries"
					imageFileName="StockSnap_7QH4K6AESO.jpg"
					price={9.0}
					description={lorem.generateParagraphs(1)}
					/></div>
				</div>
			</section>
		);
	}
}
