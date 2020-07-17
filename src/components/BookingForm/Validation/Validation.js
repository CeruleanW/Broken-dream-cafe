import _ from "lodash";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import moment from "moment";

export const Validation = (function () {
	let minNameLength = 1;
	let maxNameLength = 255;

	const isValidString = (string, minLength, maxLength) => {
		return minLength <= string.length && string.length <= maxLength;
	};

	const isValidName = (fullName) => {
		return isValidString(fullName, minNameLength, maxNameLength);
	};

	const isValidEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const isValidPhoneNumber = (phoneNumber) => {
		const step1 = parsePhoneNumberFromString('+' + phoneNumber);
		const isValid = (step1 !== undefined) && (step1.isValid());
		return isValid;
	};

	const isValidDate = (date) => {
		const dt1 = moment(date);
		const dt2 = moment();
		const result = dt1.isAfter(dt2, "day");
		return result;
	};

	// String time, format: "HH:MM", e.g. "17:40"
	const isValidTime = (time, validStartTime, validEndTime) => {
		return time >= validStartTime && time <= validEndTime;
	};

	const isValidPerson = (person) => {
		return person >= 1 && person <= 200;
	};

	const setNameRange = (min, max) => {
		minNameLength = min;
		maxNameLength = max;
	};

	// Check all inputs and return an object con
	const checkAllInputs = (state) => {
		let errors = {noError: false};
		if (!isValidName(state.name)) {
			Object.assign(errors, { nameError: true, noError: false });
		}
		if (!isValidEmail(state.email)) {
			Object.assign(errors, { emailError: true, noError: false });
		}
		if (!isValidPhoneNumber(state.phone)) {
			Object.assign(errors, { phoneError: true, noError: false });
		}
		if (!isValidDate(state.date)) {
			Object.assign(errors, { dateError: true, noError: false });
		}
		// Valid time: 9:00 AM to 9:00 PM
		if (!isValidTime(state.time, "09:00", "21:00")) {
			Object.assign(errors, { timeError: true, noError: false });
		}
		if (!isValidPerson(state.person)) {
			Object.assign(errors, { personError: true, noError: false });
		}

		// if all inputs are valid, return no error
		if (_.isEmpty(errors)) {
			return { noError: true };
		} else {
			return errors;
		}
	};

	return {
		checkAllInputs,
		setNameRange,
		isValidName
	};
})();
