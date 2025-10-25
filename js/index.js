const fridge = document.getElementById("fridge");
const food = document.getElementsByClassName("food_container");

const bgMusic = document.getElementById("bgMusic");
    window.addEventListener('DOMContentLoaded', () => {
      bgMusic.play().catch((e) => {
        console.warn("Autoplay failed, waiting for user interaction.", e);
      });
    });

document.querySelectorAll('.remove_btn').forEach(button=>{
  button.addEventListener('click', ()=> {
    const foodItem = button.parentElement;
    foodItem.innerHTML = ''; //Clear all items in div
  
    foodItem.style.height = '190px';

    const plus = document.createElement('button');
    plus.innerText = 'Deleted';
    plus.className = 'plus_btn';
  
  
    foodItem.appendChild(plus);
  })
})


