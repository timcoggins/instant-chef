/*
filename: contact.js
Contains the code for validating the contact form on the contact.html page
 */

// Event Listener for the Send Message Button
document.getElementById("message-button").addEventListener("click", (event) => {
    // Prevent default action
    event.preventDefault();
    // Check the users input
    validateInput();
});

/**
 * Checks to see if the users input is valid
 */
function validateInput() {
    // Get the users vales from the DOM
    const nameInput = document.getElementById("name-input").value;
    const emailInput = document.getElementById("email-input").value;
    const messageInput = document.getElementById("message-box").value;

    // If any of them are blank show an error message
    if (!nameInput) userMessage("Please fill out the name field", true);
    else if (!emailInput) userMessage("Please fill out the email field", true);
    else if (!messageInput) userMessage("Please fill out the message field", true);
    else userMessage("<p>Thank you for your message!</p> <p>You have instantly become a member of our cooking community!</p>", false);
}

/**
 * Shows the message to the user
 * @param {str} message Message to display.
 * @param {boolean} isError show the message as red if there is an error.
 */
function userMessage(message, isError) {
    // Get the message element from the DOM
    const messageBox = document.getElementById("submit-message");
    // Make the element visible
    messageBox.style.visibility = "visible";
    // Change the colour if its an error
    if (isError) messageBox.style.backgroundColor = "rgb(247,111,114)";
    else messageBox.style.backgroundColor = "rgb(229, 240, 244)";
    // Insert the message
    messageBox.innerHTML = message;
}
