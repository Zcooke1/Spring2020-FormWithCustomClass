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
function isAllDataValid(myRestaurant) {
    var restaurant = new Restaurant;
    var validSum = document.getElementById("validation-summary");
    var errorTxt = document.createElement("p");
    var validName = document.getElementById("name");
    var validCategory = document.getElementById("category");
    var validRating = document.getElementById("rating");
    var validDelivery = document.getElementById("delivery");
    if (validName.value == "") {
        errorTxt.innerText = "Restaurant name has to be filled.";
        validSum.appendChild(errorTxt);
        return false;
    }
    else if (validCategory.value == "") {
        errorTxt.innerText = "Category must be filled.";
        validSum.appendChild(errorTxt);
        return false;
    }
    else if (validRating.value == "Please select a rating.") {
        errorTxt.innerText = "Rating must be a valid option.";
        validSum.appendChild(errorTxt);
        return false;
    }
    else if (validDelivery.value == "Please select an option.") {
        errorTxt.innerText = "Choose whether the restaurant has delivery.";
        validSum.appendChild(errorTxt);
        return false;
    }
    else {
        return true;
    }
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
    if (hasDelivery.value == "Yes") {
        restaurant.hasDelivery = true;
    }
    else if (hasDelivery.value == "No" || hasDelivery.value == "Please select an option.") {
        restaurant.hasDelivery = false;
    }
    var categoryInput = document.getElementById("category");
    restaurant.category = categoryInput.value;
    return restaurant;
}
