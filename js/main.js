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
