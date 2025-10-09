const form = document.querySelector("form");

function validateField(field) {
	const errorMessageElement = field.parentElement.querySelector(".error-message");

	if (!field.validity.valid) {
		console.log("invalid field:", field);
		errorMessageElement.textContent = field.dataset.error || "This field is required";
		return false;
	}
	return true;
}

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
		// TODO
	} else {
		// TODO
	}
});