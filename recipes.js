const recipes = [
  {
    name: "Cheesy Garlic Broccoli",
    ingredients: ["broccoli", "cheese", "garlic"],
    image: "images/broccoli-cheese.jpg",
    link: "https://tasty.co/recipe/cheesy-garlic-broccoli",
    meal: "Lunch",
    time: "25 minutes"
  },
  {
    name: "Roasted sweet potato & carrot soup",
    ingredients: ["sweet potato", "carrot", "onion", "garlic"],
    image: "images/sweet-potato-soup.jpg",
    link:
      "https://www.bbcgoodfood.com/recipes/roasted-sweet-potato-carrot-soup",
    meal: "Lunch",
    time: "50 minutes"
  },
  {
    name: "Tom Yum Fried Rice",
    ingredients: [
      "rice",
      "peas",
      "carrot",
      "onion",
      "tom yum paste",
      "garlic",
      "chilli"
    ],
    image: "images/tom-yum-fried-rice1.jpg",
    link: "https://www.myplantifulcooking.com/tom-yum-fried-rice/",
    meal: "Dinner",
    time: "20 minutes"
  },
  {
    name: "Teriyaki Chicken",
    ingredients: ["chicken", "soy sauce", "brown sugar"],
    image: "images/teriyaki-chicken.jpg",
    link: "https://tasty.co/recipe/3-ingredient-teriyaki-chicken",
    meal: "Dinner",
    time: "27 minutes"
  },

  {
    name: "Mac & Cheese",
    ingredients: ["macaroni", "milk", "cheese"],
    image: "images/mac-and-cheese.jpg",
    link: "https://tasty.co/recipe/3-ingredient-mac-cheese",
    meal: "Lunch",
    time: "15 minutes"
  },
  {
    name: "Deep Fried Cauliflower Pieces",
    ingredients: ["cauliflower"],
    image: "images/cauliflower.jpg",
    link: "https://www.jocooks.com/recipes/deep-fried-cauliflower-pieces/",
    meal: "Lunch",
    time: "30 minutes"
  },
  {
    name: "Spicy Black Bean Tacos",
    ingredients: [
      "garlic",
      "black beans",
      "honey",
      "chilli",
      "avocado",
      "coriander",
      "onion"
    ],
    image: "images/tacos.jpg",
    link: "https://www.bbcgoodfood.com/recipes/spicy-black-bean-tacos",
    meal: "Dinner",
    time: "25 minutes"
  },
  {
    name: "Red Lentil Dahl",
    ingredients: [
      "lentils",
      "onion",
      "garlic",
      "chilli",
      "tomatoes",
      "spinach"
    ],
    image: "images/dahl.jpg",
    link: "https://veggiedesserts.com/red-lentil-dahl/",
    meal: "Dinner",
    time: "25 minutes"
  },

  {
    name: "Easy Rocky Road",
    ingredients: [
      "butter",
      "biscuits",
      "dark chocolate",
      "golden syrup",
      "icing sugar",
      "mini marshmallows"
    ],
    image: "images/3.jpg",
    link: "https://www.bbcgoodfood.com/recipes/easy-rocky-road",
    meal: "Dessert",
    time: "20 minutes"
  },
  {
    name: "Healthy Banana Pancakes",
    ingredients: ["eggs", "bananas", "cinnamon"],
    image: "images/Banana-pancakes.jpg",
    link: "https://www.eatthis.com/3-ingredient-breakfasts/",
    meal: "Breakfast",
    time: "15 minutes"
  },
  {
    name: "Avocado Toast",
    ingredients: ["bread", "avocado", "egg"],
    image: "images/Avocado-toast.jpg",
    link: "https://www.eatthis.com/3-ingredient-breakfasts/",
    meal: "Breakfast",
    time: "10 minutes"
  },

  {
    name: "Churros",
    ingredients: [
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
    image: "images/Churros.jpg",
    link: "https://www.cookingclassy.com/churros/",
    meal: "Dessert",
    time: "35 minutes"
  },

  {
    name: "Chia Seed Pudding",
    ingredients: ["chia seeds", "coconut milk", "honey"],
    image: "images/chia-pudding.jpg",
    link:
      "https://www.popsugar.co.uk/fitness/Chia-Seed-Pudding-Breakfast-38070327?utm_medium=redirect&utm_campaign=US:ES&utm_source=direct",
    meal: "Breakfast",
    time: "10 minutes"
  },

  {
    name: "Fudgy Vegan Cookies",
    ingredients: ["bananas", "peanut butter", "cocoa powder", "salt"],
    image: "images/fudge-vegan-cookies.jpg",
    link: "https://acleanbake.com/3-ingredient-detox-cookies/",
    meal: "Dessert",
    time: "25 minutes"
  },

  {
    name: "Simple Chocolate Mousse",
    ingredients: ["dark chocolate", "butter", "eggs", "cream", "sugar"],
    image: "images/choc-mousse.jpg",
    link:
      "https://www.kidspot.com.au/kitchen/recipes/chocolate-mousse/7dkxls7q?r=collection/5ingredientdessertrecipes&c=qd5kvbtx/5%20ingredient%20dessert%20recipes",
    meal: "Dessert",
    time: "10 minutes"
  }
];

export default recipes;
