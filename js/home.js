/*
filename: home.js
Driver code for the home page
 */

// Import the object that contains all of recipes
import recipes from "./data.js";
import { populateIngredients, getIngredientList } from "./populate.js";
import { drawCards } from "./draw.js";
import { filterRecipes } from "./filter.js";

/**
 * Driver code for the home page, is run on load and when the user clicks find recipe
 */
function run() {
    // Populate the dropdown menus
    populateIngredients(getIngredientList(recipes));
    // Filter and draw the cards
    drawCards(filterRecipes(recipes));
}

// Run the code on page load
run();

// Event listener for the button
document.getElementById("find-recipe-button").addEventListener("click", run);
