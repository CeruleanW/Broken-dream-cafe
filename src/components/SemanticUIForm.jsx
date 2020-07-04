import React, { Component } from "react";
import { Button, Form, Grid, TextArea } from "semantic-ui-react";

const defaultState = {
	name: '',
	email: '',
	phone: '',
	date: '',
	time: '',
	person: 2,
	message: ''
};
export default class SemanticUIForm extends Component {
	constructor(props) {
		super(props);
		this.state = defaultState;
	}
	
	handleChange = (e, { name, value }) => this.setState({ [name]: value });

	handleSubmit = () => {
		this.setState(defaultState);
	}

	render() {
		const { name, email, phone, date, time, person, message } = this.state
		return (
			<Grid centered>
				<Grid.Column width={8}>
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
								value={name}
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid
								icon="mail"
								iconPosition="left"
								placeholder="E-mail"
								type="text"
								required
								name="email"
								value={email}
								onChange={this.handleChange}
							/>
						</Form.Group>

						<Form.Group widths="equal">
							<Form.Input
								fluid
								icon="phone"
								iconPosition="left"
								placeholder="Phone number"
								type="text"
								name="phone"
								value={phone}
								onChange={this.handleChange}
							/>
							<Form.Input fluid type="date" required name="date" value={date} onChange={this.handleChange} />
						</Form.Group>

						<Form.Group widths="equal">
							<Form.Input fluid type="time" required name="time" value={time} onChange={this.handleChange} />
							<Form.Input
								fluid
								type="number"
								defaultValue="2"
								required
								name="person"
								value={person}
								onChange={this.handleChange}
							/>
						</Form.Group>

						<TextArea placeholder="Tell us more" name="message" value={message} onChange={this.handleChange} />

						<Button color="blue" fluid size="large" type="submit">
							Book Now!
						</Button>
					</Form>
				</Grid.Column>
			</Grid>
		);
	}
}
