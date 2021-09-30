// Import the object that contains all of recipes
import recipes from "./recipes.js";

/**
 * Find all the ingredients, add them to an array and draw them to the DOM dropdown lists
 *
 */

function populateIngredients() {
  // Make an empty array to store our unique ingredients
  let ingredientList = [];
  // Loop through each recipe
  for (let i = 0; i < recipes.length; i++) {
    // Loop through each ingredients in the recipe
    for (let k = 0; k < recipes[i].ingredients.length; k++) {
      // If the ingredient does not already exist in our ingredient list array
      if (!ingredientList.includes(recipes[i].ingredients[k])) {
        // Push it into the array
        ingredientList.push(recipes[i].ingredients[k]);
      }
    }
  }

  // Get the dropdowns from the DOM by ID
  const firstIngredient = document.getElementById("first-ingredient");
  const secondIngredient = document.getElementById("second-ingredient");
  // Loop through each ingredient in
  for (let x = 0; x < ingredientList.length; x++) {
    // Add the ingredient to the first dropdown menu
    const ingredientOption = document.createElement("option");
    ingredientOption.innerText = ingredientList[x];
    firstIngredient.appendChild(ingredientOption);
    // Add the ingredient to the second dropdown menu
    const ingredientOption2 = document.createElement("option");
    ingredientOption2.innerText = ingredientList[x];
    secondIngredient.appendChild(ingredientOption2);
  }
}

/**
 * Function to draw a card to the DOM
 * @param {str} name Recipe Name
 * @param {str} imageUrl Recipe Image
 * @param {str} time Recipe time
 * @param {str} url Recipe link
 */

function createCard(name, imageUrl, time, url) {
  // Get the container for the cards
  let container = document.querySelector(".recipe-card-container");

  // Create the card element
  let card = document.createElement("div");
  card.classList.add("recipe-card");
  // Make the card into a link
  card.onclick = function () {
    window.open(url, name);
  };
  //console.log(url);
  container.appendChild(card);

  // Attach the image to the card
  let recipeImage = document.createElement("div");
  recipeImage.style.backgroundImage = `url(${imageUrl})`;
  recipeImage.classList.add("recipe-image");
  card.appendChild(recipeImage);

  // Create a container to hold the two text elements
  let recipeText = document.createElement("div");
  recipeText.classList.add("recipe-text");
  card.appendChild(recipeText);

  // Add title to the text container
  let recipeName = document.createElement("h3");
  recipeName.innerHTML = name;
  recipeText.appendChild(recipeName);

  // Add the time to the text container
  let recipeTiming = document.createElement("p");
  recipeTiming.innerHTML = time;
  recipeText.appendChild(recipeTiming);
}

/**
 * Gets the values of the DOM dropdowns and filters the recipes
 *
 */

function filterRecipes() {
  // Remove all the previous cards
  removeChildren();

  // Get the values of the dropdowns from the DOM
  const meal = document.getElementById("meal-selector").value;
  const firstOption = document.getElementById("first-ingredient").value;
  const secondOption = document.getElementById("second-ingredient").value;

  // Filter out the recipes based on the meals
  let filteredRecipes = recipes.filter((item) => {
    // If the dropdown set to the default, dont filter anything
    if (meal === "All") return item;
    // If the meal is correct keep the item
    if (meal === item.meal) return item;
    // Discard the item if it doesnt meet the requirements
    return false;
  });

  // Filter out the recipes based on the first ingredient
  filteredRecipes = filteredRecipes.filter((item) => {
    // If the dropdown set to the default, keep the item
    if (firstOption === "Choose") return item;
    // If the first option is correct keep the item
    if (item.ingredients.includes(firstOption)) return item;
    // Discard the item if it doesnt meet the requirements
    return false;
  });

  // Filter out the recipes based on the second ingredient
  filteredRecipes = filteredRecipes.filter((item) => {
    // If the dropdown set to the default, keep the item
    if (secondOption === "Choose") return item;
    // If the first option is correct keep the item
    if (item.ingredients.includes(secondOption)) return item;
    // Discard the item if it doesnt meet the requirements
    return false;
  });

  // Loop through the filtered recipes and draw each card
  filteredRecipes.forEach((item) => {
    // Call the create card item
    createCard(item.name, item.image, item.time, item.link);
  });

  // Tell the user how many recipes were found
  userMessage(`We found ${filteredRecipes.length} recipes for you!`);
}

/**
 * userMessage
 * @param {str} message message to print underneath your recipes
 */

function userMessage(message) {
  const container = document.getElementById("user-message");
  container.innerText = message;
}

/**
 * removeChildren - removes all the cards from recipe-card-container
 *
 */

function removeChildren() {
  const cardContainer = document.querySelector(".recipe-card-container");
  // While there is still a child left
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.lastChild);
  }
}

// Populate the ingredients and Draw the recipes when the page first loads
populateIngredients();
filterRecipes();

// Event Listener for the Find Recipe Button
document
  .getElementById("find-recipe-button")
  .addEventListener("click", filterRecipes);
