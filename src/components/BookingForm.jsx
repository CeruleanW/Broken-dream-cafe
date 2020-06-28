import React, { Component } from "react";

// This is a Booking form
// User will use these input elements to submit data
// text input elements are very similar
// validation

const Input = (props) => {
	return (
		<div className="pure-u-1 pure-u-md-1-2">
			<label for={"booking-" + props.inputName}>{props.text}</label>
			{props.children}
		</div>
	);
};

const TextInput = (props) => {
	return (
		<div className="pure-u-1 pure-u-md-1-2">
			<label for={"booking-" + props.inputName}>{props.text}</label>
			<input
				type="text"
				name={props.inputName}
				required
				aria-invalid="false"
				placeholder={capitalize(props.inputName)}
				className="pure-u-23-24"
			/>
		</div>
	);
};

const handleSubmit = (event) => {
	setTimeout(alert("Your booking is successful!"), 500);
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1)
}

export default class BookingForm extends Component {
	render() {
		return (
			<section className="book-a-table" id={this.props.id}>
				<form action="#" onSubmit={handleSubmit} className="pure-form pure-form-aligned">
					
					<TextInput inputName="name" text="Name"/>
					<TextInput inputName="email" text="E-mail"/>
					<TextInput inputName="telephone" text="Phone number"/>
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

					<input type="submit" value="Submit" className="pure-button pure-button-primary"/>
				</form>
			</section>
		);
	}
}
