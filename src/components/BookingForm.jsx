import React, { Component } from "react";
import SemanticUIForm from "./SemanticUIForm";
import styles from "../css/BookingForm.module.css";

// Features to be done:
// validation

export default class BookingForm extends Component {
	render() {
		return (
			<section className={styles.formPadding} id={this.props.id}>
				<SemanticUIForm />
			</section>
		);
	}
}
