function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

function selectFood(foodName) {
  document.getElementById("food").value = foodName;
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
}

function placeOrder() {
  let name = document.getElementById("name").value;
  let food = document.getElementById("food").value;

  if (name === "" || food === "") {
    alert("Please fill all details!");
  } else {
    alert("Thank you " + name + " 🍽️\nYour " + food + " order is confirmed!");
    document.getElementById("name").value = "";
    document.getElementById("food").value = "";
  }
}
