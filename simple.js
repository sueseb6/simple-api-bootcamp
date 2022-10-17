// HOUSE HAYDEN: WORKED WITH SYDNEI AND MARSHA
// SPECIAL SHOUTOUT TO OSCAR

document.querySelector("button").addEventListener("click", getRecipes);

function getRecipes() {

let randomRecipe = Math.floor(Math.random()*100);
let type = document.querySelector("input").value;

  fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${randomRecipe}&cuisineType=${type}&app_id=08104a27&app_key=257657b59e65c46ea30cbae54d5979e7`)

    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      let cuisineType = data.hits[0].recipe.cuisineType;
      let mealPhoto = data.hits[0].recipe.image;
      let mealName = data.hits[0].recipe.label;
      let ingredients = data.hits[0].recipe.ingredientLines;

      document.querySelector("#cuisine").innerText = cuisineType;
        document.querySelector("img").src = mealPhoto;
        document.querySelector("#dishName").innerText = mealName;
        document.querySelector('#stuff').innerText = ingredients;

    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// https://api.spoonacular.com/recipes/cuisine

// https://api.edamam.com/api/food-database/recipes?app_id=08104a27&app_key=f64fbfdb21d5446da6a100b0c8d9ed84

// let url = 'https://api.edamam.com/api/recipes/v2?app_id=08104a27&app_key=f64fbfdb21d5446da6a100b0c8d9ed84'

// 50edc8811f668dfaba356b697b4ab74b

// https://api.edamam.com/api/recipes/v2?type=any&q=recipe&app_id=08104a27&app_key=79e99836ae68547e0aa610f438f205d0&field=cuisineType


// fetch('https://api.edamam.com/api/recipes/v2?type=public&q=recipe&app_id=08104a27&app_key=79e99836ae68547e0aa610f438f205d0&cuisine=${cuisine}')


  // let url = 'https://api.edamam.com/api/recipes/v2?type=public&q=recipe&app_id=08104a27&app_key=79e99836ae68547e0aa610f438f205d0';

  