// // On add_recipe.html form submission
// function saveRecipe(e) {
//     e.preventDefault();
//     const title = document.getElementById('title').value;
//     const image = document.getElementById('image').value; // or upload
//     const desc = document.getElementById('desc').value;
//     const detailPage = 'custom_recipe_' + Date.now() + '.html'; // or generate dynamically
  
//     let recipes = JSON.parse(localStorage.getItem('customRecipes')) || [];
//     recipes.push({ title, image, desc, detailPage });
//     localStorage.setItem('customRecipes', JSON.stringify(recipes));
  
//     // redirect or go back to fridge
//     location.href = 'index.html';
//   }
  