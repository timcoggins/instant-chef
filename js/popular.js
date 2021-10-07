/*
filename: popular.js
Driver code for the popular page
 */

// Import the object that contains all of recipes
import recipes from "./data.js";
import { drawCards } from "./draw.js";
import { filterPopularRecipes } from "./filter.js";

drawCards(filterPopularRecipes(recipes));
