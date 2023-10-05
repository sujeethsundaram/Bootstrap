document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Reset previous validation styles and error messages
        resetValidation();

        let isValid = true;

        // Validate First Name
        const firstNameInput = document.getElementById("firstName");
        if (!firstNameInput.value.trim()) {
            isValid = false;
            showError(firstNameInput, "POOR");
        }

        // Validate Last Name
        const lastNameInput = document.getElementById("lastName");
        if (!lastNameInput.value.trim()) {
            isValid = false;
            showError(lastNameInput, "POOR");
        }

        // Validate Email
        const emailInput = document.getElementById("email");
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailInput.value.match(emailPattern)) {
            isValid = false;
            showError(emailInput, "POOR");
        }

        // Validate Password
        const passwordInput = document.getElementById("password");
        if (passwordInput.value.trim() === "") {
            isValid = false;
            showError(passwordInput, "POOR");
        }

        // Validate Re-enter Password
        const reenterPasswordInput = document.getElementById("confirmpassword");
        if (reenterPasswordInput.value.trim() === "") {
            isValid = false;
            showError(reenterPasswordInput, "POOR OR MISMATCH");
        }
        if (reenterPasswordInput.value !== passwordInput.value) {
            isValid = false;
            showError(reenterPasswordInput, "POOR OR MISMATCH");
        }
        
        // Validate Age
        const ageInput = document.getElementById("age");
        if (!ageInput.value.trim()) {
            isValid = false;
            showError(ageInput, "POOR");
        } else if (isNaN(ageInput.value)) {
            isValid = false;
            showError(ageInput, "Age must be a number");
        }

        // Validate Phone Number
        const phoneNumberInput = document.getElementById("number");
        if (!phoneNumberInput.value.trim()) {
            isValid = false;
            showError(phoneNumberInput, "POOR");
        } else if (!/^\d{10}$/.test(phoneNumberInput.value)) {
            isValid = false;
            showError(phoneNumberInput, "Phone number must be 10 digits");
        }

        // Validate Address
        const addressTextarea = document.getElementById("address");
        if (!addressTextarea.value.trim()) {
            isValid = false;
            showError(addressTextarea, "POOR");
        }

        // Validate State
        const stateInput = document.getElementById("state");
        if (!stateInput.value.trim()) {
            isValid = false;
            showError(stateInput, "POOR");
        }

        // Submit the form if it's valid
        if (isValid) {
            form.submit();
        }
    });

    function showError(input, errorMessage) {
        input.classList.add("invalid");
        const errorSpan = document.createElement("span");
        errorSpan.textContent = errorMessage;
        errorSpan.classList.add("error");
        input.parentNode.appendChild(errorSpan);
        errorSpan.style.color = "red";
        errorSpan.style.verticalAlign = "middle";
    }

    function resetValidation() {
        const errorSpans = document.querySelectorAll(".error");
        const inputs = document.querySelectorAll(".invalid");

        errorSpans.forEach((errorSpan) => {
            errorSpan.parentNode.removeChild(errorSpan);
        });

        inputs.forEach((input) => {
            input.classList.remove("invalid");
        });
    }
});
