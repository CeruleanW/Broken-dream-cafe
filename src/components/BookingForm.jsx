import React, { Component } from "react";
import SemanticUIForm from "./SemanticUIForm";

// Features to be done:
// validation

const handleSubmit = (event) => {
	setTimeout(alert("Your booking is successful!"), 500);
}

export default class BookingForm extends Component {
	render() {
		return (
			<section className="book-a-table" id={this.props.id}>
				<SemanticUIForm />
			</section>
		);
	}
}
