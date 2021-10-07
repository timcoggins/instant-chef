/*
filename: draw.js
Takes a list of recipe objects and draws them to the DOM
 */

/**
 * Takes a list of recipes and draws the cards
 * @param {array} recipesList Array of Recipe objects
 */
function drawCards(recipesList) {
    // Remove all the previous cards
    removeChildren(".recipe-card-container");
    // Loop through the filtered recipes and draw each card
    recipesList.forEach((currentRecipe) => createCard(currentRecipe));
    // Tell the user how many recipes were found
    userMessage(`We found ${recipesList.length} recipes for you!`);
}

/**
 * Function to draw a card to the DOM
 * @param {object} currentRecipe A single Recipe object
 */
function createCard(currentRecipe) {
    // Get the container for the cards
    let container = document.querySelector(".recipe-card-container");

    // Create the card element and make it into a link
    let card = document.createElement("div");
    card.classList.add("recipe-card");
    card.onclick = function () { window.open(currentRecipe.link, currentRecipe.name) };
    container.appendChild(card);

    // Attach the image to the card
    let recipeImage = document.createElement("div");
    recipeImage.style.backgroundImage = `url(${currentRecipe.image})`;
    recipeImage.classList.add("recipe-image");
    card.appendChild(recipeImage);

    // Create a container to hold the two text elements
    let recipeText = document.createElement("div");
    recipeText.classList.add("recipe-text");
    card.appendChild(recipeText);

    // Add title to the text container
    let recipeName = document.createElement("h3");
    recipeName.innerHTML = currentRecipe.name;
    recipeText.appendChild(recipeName);

    // Add the time to the text container
    let recipeTiming = document.createElement("p");
    recipeTiming.innerHTML = currentRecipe.time;
    recipeText.appendChild(recipeTiming);
}

/**
 * removeChildren - removes all the cards from recipe-card-container
 * @param {element} element Element on the DOM
 */
function removeChildren(element) {
    const cardContainer = document.querySelector(element);
    // While there is still a child left
    while (cardContainer.firstChild) cardContainer.removeChild(cardContainer.lastChild);
}

/**
 * userMessage
 * @param {str} message Message to print underneath your recipes
 */
function userMessage(message) {
    const container = document.getElementById("user-message");
    container.innerHTML = message;
}

export { drawCards }