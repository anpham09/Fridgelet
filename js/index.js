const fridge = document.getElementById("fridge");
const food = document.getElementsByClassName("food_container");

let isOpen = false;

fridge.addEventListener("click", () => {
    isOpen = !isOpen;
    fridge.src = isOpen
      ? "../img/fridge/opened_fridge.png"
      : "../img/fridge/closed_fridge.png";

    for (let i = 0; i < food.length; i++) {
        food[i].style.display = isOpen ? "block" : "none";
    }
});