import React, { Component } from "react";
import { Button, Form, TextArea } from "semantic-ui-react";
import ModalBasic from "./ModalBasic";
import { Validation } from "./Validation/Validation";
import { ErrorMessages } from "./ErrorMessages";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
//TODO: Modal for submission
//TODO: Validation & Error Message

const defaultFormState = {
	name: "",
	email: "",
	phone: "",
	date: "",
	time: "",
	person: 2,
	message: "",
	errorMessages: {
		nameError: "",
		emailError: "",
		phoneError: "",
		dateError: "",
		timeError: "",
		personError: "",
	},
};

export default class MainForm extends Component {
	constructor(props) {
		super(props);
		this.state = { ...defaultFormState, openModal: false };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e, { name, value }) => this.setState({ [name]: value });

	handleSubmit = () => {
		// Validate inputs
		const errors = Validation.checkAllInputs(this.state);
		if (!errors.noError) {
			this.setState({
				errorMessages: ErrorMessages.getErrorMessages(errors),
			});
			console.log(this.state);
		} else {
			// show the Modal
			this.setState({ openModal: true });
			// Some code sending data to the server

			// clear all the inputs
			this.setState(defaultFormState);
		}
	};

	handleCloseModal = () => {
		this.setState({ openModal: false });
	};

	render() {
		const SubmitButton = (props) => {
			return (
				<Button
					color="blue"
					fluid
					size="large"
					type="submit"
					value="Submit"
					onClick={this.handleSubmit}
				>
					Book Now!
				</Button>
			);
		};

		return (
			<Form size="large" onSubmit={this.handleSubmit}>
				<Form.Group widths="equal">
					<Form.Input
						fluid
						icon="user"
						iconPosition="left"
						placeholder="Name"
						type="text"
						required
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
						error={this.state.errorMessages.nameError || false}
					/>
					<Form.Input
						fluid
						icon="mail"
						iconPosition="left"
						placeholder="E-mail"
						type="text"
						required
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						error={this.state.errorMessages.emailError || false}
					/>
				</Form.Group>

				<Form.Group widths="equal">
					<Form.Field
						fluid
						error={this.state.errorMessages.phoneError || false}
						children={<PhoneInput
							country={"ca"}
							value={this.state.phone}
							onChange={phone => this.setState({ phone })}
							preferredCountries={["ca", "us"]}
							inputStyle={{ paddingLeft: "48px"}}
							containerClass="ui fluid input"
							// containerStyle={{ height: 'auto' }}
							inputProps={{ name: 'phone', className: "" }}
						/>}
					>
						{/* <PhoneInput
							country={"ca"}
							value={this.state.phone}
							onChange={phone => this.setState({ phone })}
							preferredCountries={["ca", "us"]}
							inputStyle={{ paddingLeft: "48px"}}
							containerClass="ui fluid input"
							// containerStyle={{ height: 'auto' }}
							inputProps={{ name: 'phone', className: "" }}
						/> */}
					</Form.Field>
					{/* <Form.Input
						fluid
						icon="phone"
						iconPosition="left"
						placeholder="Phone number"
						type="text"
						name="phone"
						value={this.state.phone}
						onChange={this.handleChange}
						error={this.state.errorMessages.phoneError || false}
					/> */}

					<Form.Input
						fluid
						type="date"
						required
						name="date"
						value={this.state.date}
						onChange={this.handleChange}
						error={this.state.errorMessages.dateError || false}
					/>
				</Form.Group>

				<Form.Group widths="equal">
					<Form.Input
						fluid
						type="time"
						required
						name="time"
						value={this.state.time}
						onChange={this.handleChange}
						error={this.state.errorMessages.timeError || false}
					/>
					<Form.Input
						fluid
						type="number"
						required
						name="person"
						value={this.state.person}
						onChange={this.handleChange}
						error={this.state.errorMessages.personError || false}
						icon="users"
						iconPosition="left"
					/>
				</Form.Group>

				<TextArea
					placeholder="Tell us more"
					name="message"
					value={this.state.message}
					onChange={this.handleChange}
				/>

				<ModalBasic
					trigger={<SubmitButton />}
					isOpened={this.state.openModal}
					onClose={this.handleCloseModal}
				/>
			</Form>
		);
	}
}
