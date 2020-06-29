import React, { Component } from "react";

// This is a Booking form
// User will use these input elements to submit data
// text input elements are very similar
// validation

const InputWrapper = (props) => {
	return (
		<div className="pure-u-1 pure-u-md-1-2">
			<label className="pure-u-1" htmlFor={"booking-" + props.inputName}>{props.text}</label>
			{props.children}
		</div>
	);
};

const TextInput = (props) => {
	return (
		<InputWrapper inputName={props.inputName} text={props.text}>
			<input
				type="text"
				name={props.inputName}
				required
				aria-invalid="false"
				placeholder={capitalize(props.inputName)}
				className="pure-u-1"
				id={"booking-" + props.inputName}
			/>
		</InputWrapper>
	);
};

const DateInput = (props) => {
	return (
		<InputWrapper inputName="date" text="Date">
			<input
				type="date"
				name="appointment-date"
				id="booking-date"
				required
				aria-invalid="false"
				placeholder="Date"
			/>
		</InputWrapper>
	);
};

const TimeInput = (props) => {
	return (
		<InputWrapper inputName="time" text="Time">
			<input
				type="time"
				id="booking-time"
				name="booking-time"
				min="09:00"
				max="22:00"
				required
				aria-invalid="false"
			/>
		</InputWrapper>
	);
};

const GuestNumberInput = (props) => {
	return (
		<InputWrapper inputName="guest-number" text="Number of Guests">
			<input
				type="number"
				name="guest-number"
				defaultValue="2"
				required
				aria-invalid="false"
				placeholder={2}
				id="booking-guest-number"
			/>
		</InputWrapper>
	);
};

const MessageInput = (props) => {
	return (
		<InputWrapper inputName="message" text="Message(optional)">
					<textarea
						name="booking-message"
						aria-invalid="false"
						placeholder="Message"
						spellCheck="false"
						defaultValue={""}
						className="pure-u-1"
						id="booking-message"
					/>
		</InputWrapper>
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
				<form
					action="#"
					onSubmit={handleSubmit}
					className="pure-form pure-form-aligned"
				>
					<div className="pure-g">
						<TextInput inputName="name" text="Name" />
						<TextInput inputName="email" text="E-mail" />
						<TextInput inputName="telephone" text="Phone number" />
						<DateInput />
						<TimeInput />
						<GuestNumberInput />
					</div>
					<MessageInput />

					<input
						type="submit"
						value="Submit"
						className="pure-button pure-button-primary"
					/>
				</form>
			</section>
		);
	}
}
