document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Reset previous validation styles and error messages
        resetValidation();

        let isValid = true;

        // Validate Name
        const nameInput = document.getElementById("contact_name");
        if (!nameInput.value.trim()) {
            isValid = false;
            showError(nameInput, "This field is required");
        }

        // Validate Email
        const emailInput = document.getElementById("contact_email");
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailInput.value.match(emailPattern)) {
            isValid = false;
            showError(emailInput, "A valid email address is required");
        }

        // Validate Website
        const websiteInput = document.getElementById("contact_website");
        const urlPattern = /^(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/;
        if (!websiteInput.value.match(urlPattern)) {
            isValid = false;
            showError(websiteInput, "A valid url is required");
        }

        // Validate Message
        const messageTextarea = document.getElementById("contact_message");
        if (!messageTextarea.value.trim()) {
            isValid = false;
            showError(messageTextarea, "This field is required");
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
