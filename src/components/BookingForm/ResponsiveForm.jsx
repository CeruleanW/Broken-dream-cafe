import React from "react";
import { Grid, Responsive } from "semantic-ui-react";
import MainForm from "./MainForm";

export default function ResponsiveForm() {
	return (
		<div>
			<Responsive minWidth={767}>
				<Grid centered>
					<Grid.Column width="8">
						<MainForm />
					</Grid.Column>
				</Grid>
			</Responsive>
			<Responsive maxWidth={767}>
				<Grid centered>
					<Grid.Column width="15">
						<MainForm />
					</Grid.Column>
				</Grid>
			</Responsive>
		</div>
	);
}
