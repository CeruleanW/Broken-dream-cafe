import React, { useState } from "react";
import { Icon, Modal, Button } from "semantic-ui-react";

const SuccessIcon = (props) => {
	return <Icon color="teal" name="check" />;
};

export default function ModalBasic(props) {
	const handleClose = (event) => {
		props.onClose();
  };
  
	return (
		<Modal trigger={props.trigger} open={props.isOpened}>
			<Modal.Content>
				{" "}
				<SuccessIcon /> Congratulation! Your booking has been confirmed! Check your
				email for details.
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={handleClose}>OK</Button>
			</Modal.Actions>
		</Modal>
	);
}
