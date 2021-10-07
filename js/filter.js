/*
filename: filter.js
Takes a list of recipe objects and returns a filtered list of objects
 */

/**
 * Gets the values of the DOM dropdowns and filters the recipes
 * @param {array} recipes Array of all the recipe objects
 */
function filterRecipes(recipes) {
    // Get the values of the dropdowns from the DOM
    const meal = document.getElementById("meal-selector").value;
    const firstOption = document.getElementById("first-ingredient").value;
    const secondOption = document.getElementById("second-ingredient").value;

    // Filter out the recipes based on the meals
    let filteredRecipes = recipes.filter((item) => {

        // If the dropdown set to the default, dont filter anything
        if (meal === "All" || meal === item.meal) return true;

        // This code allows dinner and lunch items to be interchangable
        if (meal === "Lunch" || meal === "Dinner") {
            if (item.meal === "Lunch" || item.meal === "Dinner") return true;
        }

        // Discard the item if it doesnt meet the requirements
        return false;
    });

    // Filter out the recipes based on the first ingredient
    filteredRecipes = filteredRecipes.filter(item => firstOption === "Choose" || item.ingredients.includes(firstOption) ? true : false);
    // Filter out the recipes based on the second ingredient
    filteredRecipes = filteredRecipes.filter(item => secondOption === "Choose" || item.ingredients.includes(secondOption) ? true : false);

    return filteredRecipes;
}

/**
 * Returns a filtered list of popular recipes
 * @param {array} recipes Array of Recipe objects
 */
function filterPopularRecipes(recipes) {
    const result = recipes.filter(currentRecipe => currentRecipe.isPopular ? true : false);
    return result;
}


export {filterRecipes, filterPopularRecipes }