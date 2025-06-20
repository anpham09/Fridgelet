const fridge = document.getElementById("fridge");
const food = document.getElementsByClassName("food_container");


// let isOpen = false;

// fridge.addEventListener("click", () => {
//     isOpen = !isOpen;
//     fridge.src = isOpen
//       ? "../img/fridge/opened_fridge.png"
//       : "../img/fridge/closed_fridge.png";

//     for (let i = 0; i < food.length; i++) {
//         food[i].style.display = isOpen ? "block" : "none";
//     }
// });

document.querySelectorAll('.remove_btn').forEach(button=>{
  button.addEventListener('click', ()=> {
    const foodItem = button.parentElement;
    foodItem.innerHTML = ''; //Clear all items in div
  
    foodItem.style.height = '190px';

    //Add plus button
    const plus = document.createElement('button');
    plus.innerText = 'Deleted';
    plus.className = 'plus_btn';
  
    // Transfer to add_recipe_form page after clicked
    // plus.addEventListener('click', ()=>{
    //   window.location.href = '../html/add_recipe_form.html';
    // });
  
    foodItem.appendChild(plus);
  })
})



// window.onload = function() {
//   let recipes = JSON.parse(localStorage.getItem('customRecipes')) || [];

//   recipes.forEach(recipe => {
//     const div = document.createElement('div');
//     div.className = 'food-item';
//     div.innerHTML = `
//       <img src="${recipe.image}" />
//       <div class="description">${recipe.desc}</div>
//       <a href="${recipe.detailPage}">See details</a>
//     `;
//     fridge.appendChild(div);
//   });
// }

