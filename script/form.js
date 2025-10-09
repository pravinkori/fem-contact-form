const form = document.querySelector("form");

function validateField(field) {
	const errorMessageElement = field.type === 'radio' 
		? field.closest('fieldset').querySelector(".error-message") 
		: field.parentElement.querySelector(".error-message");

	if (!field.validity.valid) {
		errorMessageElement.textContent = field.dataset.error || "This field is required";
		return false;
	}

	errorMessageElement.textContent = "";
	return true;
}

form.querySelectorAll("input, textarea").forEach(input => {
	input.addEventListener("blur", () => {
		validateField(input);
	});
});

form.addEventListener("submit", function(e) {
	e.preventDefault();

	let isValid = true;
	const fields = form.querySelectorAll("input, textarea");

	fields.forEach(field => {
		console.log(`checking ${field.name}`);
		
		const fieldValid = validateField(field);
		if (!fieldValid) {
			isValid = false;
		}
	});

	if (isValid) {
		// Reset the form after submit
		form.reset();
	} else {
		// Adding focus to first invalid element on submit
		form.querySelector(":invalid").focus();
	}
});