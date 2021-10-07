/*
filename: data.js
This file contains all the recipe data built from the class Recipe
 */

const recipes = [];

class Recipe {
  constructor(name, time, meal, ingredients, link, image, isPopular) {
    this.name = name;
    this.ingredients = ingredients;
    this.time = time;
    this.meal = meal;
    this.link = link;
    this.image = image;
    this.isPopular = isPopular;
  }
}

recipes.push(
  new Recipe(
    "Cheesy Garlic Broccoli",
    "25 Minutes",
    "Lunch",
    ["broccoli", "cheese", "garlic"],
    "https://tasty.co/recipe/cheesy-garlic-broccoli",
    "images/recipes/broccoli-cheese.jpg",
    true
  )
);
recipes.push(
  new Recipe(
    "Roasted sweet potato & carrot soup",
    "50 Minutes",
    "Lunch",
    ["sweet potato", "carrot", "onion", "garlic"],
    "https://www.bbcgoodfood.com/recipes/roasted-sweet-potato-carrot-soup",
    "images/recipes/sweet-potato-soup.jpg",
    false
  )
);
recipes.push(
  new Recipe(
    "Teriyaki Chicken",
    "27 Minutes",
    "Dinner",
    ["chicken", "soy sauce", "brown sugar"],
    "https://tasty.co/recipe/3-ingredient-teriyaki-chicken",
    "images/recipes/teriyaki-chicken.jpg",
    true
  )
);
recipes.push(
  new Recipe(
    "Tom Yum Fried Rice",
    "20 Minutes",
    "Dinner",
    ["rice", "peas", "carrot", "onion", "tom yum paste", "garlic", "chilli"],
    "https://www.myplantifulcooking.com/tom-yum-fried-rice/",
    "images/recipes/tom-yum-fried-rice1.jpg",
    true
  )
);
recipes.push(
  new Recipe(
    "Mac & Cheese",
    "15 Minutes",
    "Lunch",
    ["macaroni", "milk", "cheese"],
    "https://tasty.co/recipe/3-ingredient-mac-cheese",
    "images/recipes/mac-and-cheese.jpg",
    false
  )
);
recipes.push(
  new Recipe(
    "Deep Fried Cauliflower Pieces",
    "30 Minutes",
    "Lunch",
    ["cauliflower"],
    "https://www.jocooks.com/recipes/deep-fried-cauliflower-pieces/",
    "images/recipes/cauliflower.jpg",
    false
  )
);

recipes.push(
  new Recipe(
    "Spicy Black Bean Tacos",
    "25 minutes",
    "Dinner",
    [
      "garlic",
      "black beans",
      "honey",
      "chilli",
      "avocado",
      "coriander",
      "onion"
    ],
    "https://www.bbcgoodfood.com/recipes/spicy-black-bean-tacos",
    "images/recipes/tacos.jpg",
    true
  )
);

recipes.push(
  new Recipe(
    "Red Lentil Dahl",
    "25 minutes",
    "Dinner",
    ["lentils", "onion", "garlic", "chilli", "tomatoes", "spinach"],
    "https://veggiedesserts.com/red-lentil-dahl/",
    "images/recipes/dahl.jpg",
    false
  )
);

recipes.push(
  new Recipe(
    "Easy Rocky Road",
    "20 minutes",
    "Dessert",
    [
      "butter",
      "biscuits",
      "dark chocolate",
      "golden syrup",
      "icing sugar",
      "mini marshmallows"
    ],
    "https://www.bbcgoodfood.com/recipes/easy-rocky-road",
    "images/recipes/rocky-road.jpg",
    true
  )
);

recipes.push(
  new Recipe(
    "Healthy Banana Pancakes",
    "15 minutes",
    "Breakfast",
    ["eggs", "bananas", "cinnamon"],
    "https://www.eatthis.com/3-ingredient-breakfasts/",
    "images/recipes/Banana-pancakes.jpg",
    false
  )
);

recipes.push(
  new Recipe(
    "Avocado Toast",
    "10 minutes",
    "Breakfast",
    ["bread", "avocado", "egg"],
    "https://www.eatthis.com/3-ingredient-breakfasts/",
    "images/recipes/Avocado-toast.jpg",
    false
  )
);

recipes.push(
  new Recipe(
    "Churros",
    "35 minutes",
    "Dessert",
    [
      "water",
      "milk",
      "butter",
      "flour",
      "eggs",
      "sugar",
      "salt",
      "oil",
      "cinnamon"
    ],
    "https://www.cookingclassy.com/churros/",
    "images/recipes/churros.jpg",
    false
  )
);

recipes.push(
  new Recipe(
    "Chia Seed Pudding",
    "10 minutes",
    "Breakfast",
    ["chia seeds", "coconut milk", "honey"],
    "https://www.popsugar.co.uk/fitness/Chia-Seed-Pudding-Breakfast-38070327?utm_medium=redirect&utm_campaign=US:ES&utm_source=direct",
    "images/recipes/chia-pudding.jpg",
    false
  )
);

recipes.push(
  new Recipe(
    "Simple Chocolate Mousse",
    "10 minutes",
    "Dessert",
    ["dark chocolate", "butter", "eggs", "cream", "sugar"],
    "https://www.kidspot.com.au/kitchen/recipes/chocolate-mousse/7dkxls7q?r=collection/5ingredientdessertrecipes&c=qd5kvbtx/5%20ingredient%20dessert%20recipes",
    "images/recipes/choc-mousse.jpg",
    false
  )
);

recipes.push(
  new Recipe(
    "Fudgy Vegan Cookies",
    "25 minutes",
    "Dessert",
    ["bananas", "peanut butter", "cocoa powder", "salt"],
    "https://acleanbake.com/3-ingredient-detox-cookies/",
    "images/recipes/fudge-vegan-cookies.jpg",
    true
  )
);

export default recipes;
