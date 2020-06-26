import React, { Component } from "react";

// This is a Booking form
// User will use these input elements to submit data
// text input elements are very similar
// validation

const createTextInput = (inputName) => {
	return (
		<input
			type="text"
			name={inputName}
			required
			aria-invalid="false"
			placeholder={capitalize(inputName)}
		/>
	);
};

const handleSubmit = (event) => {
	setTimeout(alert("Your booking is successful!"), 500);
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1)
}

export default class Booking extends Component {
	render() {
		return (
			<section className="book-a-table" id={this.props.id}>
				<form action="#" onSubmit={handleSubmit}>
					{createTextInput("name")}
					{createTextInput("email")}
					{createTextInput("telephone")}
					<input
						type="date"
						name="appointment-date"
						id="appointment-date"
						required
						aria-invalid="false"
						placeholder="Date"
					/>
					<input
						type="time"
						id="appointment-time"
						name="appointment-time"
						min="09:00"
						max="22:00"
						required
						aria-invalid="false"
					></input>
					<input
						type="number"
						name=""
						defaultValue="2"
						required
						aria-invalid="false"
						placeholder={2}
					/>
					<textarea
						name=""
						aria-invalid="false"
						placeholder="Message"
						spellCheck="false"
						defaultValue={""}
					/>

					<input type="submit" value="Submit" />
				</form>
			</section>
		);
	}
}
