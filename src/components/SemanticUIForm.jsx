import React from "react";
import {
	Button,
	Form,
	Grid,
	TextArea,
} from "semantic-ui-react";

const SemanticUIForm = (props) => (
	<Grid centered>
		<Grid.Column width={8}>
			<Form size="large">
				<Form.Group widths="equal">
					<Form.Input
						fluid
						icon="user"
						iconPosition="left"
						placeholder="Name"
						type="text"
						required
					/>
					<Form.Input
						fluid
						icon="mail"
						iconPosition="left"
						placeholder="E-mail"
						type="text"
						required
					/>
				</Form.Group>

				<Form.Group widths="equal">
					<Form.Input
						fluid
						icon="phone"
						iconPosition="left"
						placeholder="Phone number"
						type="text"
					/>
					<Form.Input fluid type="date" required />
				</Form.Group>

				<Form.Group widths="equal">
					<Form.Input fluid type="time" required />
					<Form.Input fluid type="number" defaultValue="2" required />
				</Form.Group>

				<TextArea placeholder="Tell us more" />

				<Button color="blue" fluid size="large" type="submit">
					Book Now!
				</Button>
			</Form>
		</Grid.Column>
	</Grid>
);

export default SemanticUIForm;
