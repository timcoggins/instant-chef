/*
filename: populate.js
Populates the dropdown lists on the homepage
 */

/**
 * Find all the ingredients from all off the recipes and return a new array
 * @param {array} recipes Array of all the recipe objects
 */
function getIngredientList(recipes) {
    // Make an empty array to store our unique ingredients
    let ingredientList = [];
    // Loop through each recipe
    recipes.forEach((currentRecipe) => {
        // Loop through each ingredient in the recipe
        currentRecipe.ingredients.forEach((currentIngredient) => {
            // If the ingredient does not already exist in our ingredient list array, push it in
            if (!ingredientList.includes(currentIngredient)) ingredientList.push(currentIngredient);
        });
    });
    // return the array of ingredients
    return ingredientList;
}

/**
 * Draw the ingredients to the dropdowns on the Homepage DOM
 * @param {array} ingredientList Array of ingredients as strings
 */
function populateIngredients(ingredientList) {
    // Get the dropdowns from the DOM by ID
    const firstIngredient = document.getElementById("first-ingredient");
    const secondIngredient = document.getElementById("second-ingredient");
    // Loop through each ingredient add draw to the DOM
    ingredientList.forEach((currentIngredient) => {
        // Add the ingredient to the first dropdown menu
        const ingredientOption = document.createElement("option");
        ingredientOption.innerText = currentIngredient;
        firstIngredient.appendChild(ingredientOption);
        // Add the ingredient to the second dropdown menu
        const ingredientOption2 = document.createElement("option");
        ingredientOption2.innerText = currentIngredient;
        secondIngredient.appendChild(ingredientOption2);
    });
}

export {
    getIngredientList,
    populateIngredients
};
