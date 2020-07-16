export const ErrorMessages = (function () {
	const allErrorMessages = {
		nameError: {
			content: "Please enter your full name correctly",
			pointing: "below",
		},
		emailError: {
			content:
				'Email address must contain "@" and a "." in the right places',
			pointing: "below",
		},
		phoneError: {
			content: "Please enter your phone number correctly",
			pointing: "below",
		},
		dateError: {
			content: "The date cannot be earlier than tomorrow.",
			pointing: "below",
		},
		timeError: {
			content: "Please book at a time between 9:00 AM to 9:00 PM",
			pointing: "below",
		},
		personError: {
			content: "The number must be in the range from 1 to 200",
			pointing: "below",
		},
	};

	// take an error object and return an object containing corresponding error messages
	const getErrorMessages = (errors) => {
		let errorMessages = {};
		for (const [key, value] of Object.entries(errors)) {
			console.log(`${key}: ${value}`);
			// if there is an error, add an error message in the returned object
			if (value) {
				errorMessages[key] = allErrorMessages[key];
			}
		}
		return errorMessages;
	};

	const setErrorMessage = (errorName, messageContent) => {
		allErrorMessages[errorName] = messageContent;
	};

	return {
		getErrorMessages,
		setErrorMessage,
	};
})();
