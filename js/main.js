var Restaurant = (function () {
    function Restaurant() {
    }
    return Restaurant;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addRestaurant;
};
function addRestaurant() {
    if (isAllDataValid()) {
        var restaurant = getRestaurant();
        displayRestaurant(restaurant);
    }
}
function isAllDataValid() {
    return true;
}
function displayRestaurant(myRestaurant) {
    var displayDiv = document.getElementById("display");
    var restHeading = document.createElement("h2");
    restHeading.innerText = myRestaurant.name;
    var restInfo = document.createElement("p");
    restInfo.innerText = myRestaurant.name = " is in the " + myRestaurant.category + " category, it has a " +
        myRestaurant.rating + " rating and delivery is " + myRestaurant.hasDelivery + ".";
    displayDiv.appendChild(restHeading);
    displayDiv.appendChild(restInfo);
}
function getRestaurant() {
    var restaurant = new Restaurant();
    var nameInput = document.getElementById("name");
    restaurant.name = nameInput.value;
    var ratingInput = document.getElementById("rating");
    restaurant.rating = ratingInput.value;
    var hasDelivery = document.getElementById("delivery");
    if (hasDelivery.checked) {
        restaurant.hasDelivery = true;
    }
    else {
        restaurant.hasDelivery = false;
    }
    var categoryInput = document.getElementById("category");
    restaurant.category = categoryInput.value;
    return restaurant;
}
