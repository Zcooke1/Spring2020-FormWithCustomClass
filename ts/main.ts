class Restaurant{
    name:string;
    category:string;
    rating:string;
    hasDelivery:boolean;
}

// test code
/*
let myRestaurant = new Restaurant();
myRestaurant.name = "Farelli's Pizza";
myRestaurant.category = "italian";
myRestaurant.rating = 4;
*/

window.onload = function(){
    let addBtn = 
        <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addRestaurant;
}

function addRestaurant(){
    
    if(isAllDataValid()){
        let restaurant = getRestaurant();
        displayRestaurant(restaurant);
    }

}

//ADD VALIDATION CODE#####################################
function isAllDataValid(myRestaurant:Restaurant):boolean{
    
    let restaurant = new Restaurant;
    let validSum = document.getElementById("validation-summary");
    let errorTxt = document.createElement("p");
    let validName = <HTMLInputElement>document.getElementById("name");
    let validCategory = <HTMLInputElement>document.getElementById("category");
    let validRating = <HTMLInputElement>document.getElementById("rating");
    let validDelivery = <HTMLInputElement>document.getElementById("delivery");

    

    if (validName.value == ""){
       errorTxt.innerText = "Restaurant name has to be filled.";
       validSum.appendChild(errorTxt);
       return false;
    }
    else if (validCategory.value == ""){
        errorTxt.innerText = "Category must be filled.";
        validSum.appendChild(errorTxt);
        return false;
    }
    else if (validRating.value == "Please select a rating."){
        errorTxt.innerText = "Rating must be a valid option.";
        validSum.appendChild(errorTxt);
        return false;
    }

    else if (validDelivery.value == "Please select an option."){
        errorTxt.innerText = "Choose whether the restaurant has delivery."
        validSum.appendChild(errorTxt);
        return false;
    }
    else{
        return true;
    }

}

function displayRestaurant(myRestaurant:Restaurant):void{
    //Display Restaurant below the form.
    let displayDiv = document.getElementById("display");

    // Create h2 with restaurant title
    let restHeading = document.createElement("h2");
    restHeading.innerText = myRestaurant.name;

    // Create paragraph with game details
    let restInfo = document.createElement("p");
    restInfo.innerText = myRestaurant.name = " is in the " + myRestaurant.category + " category, it has a " + 
                                myRestaurant.rating + " rating and delivery is " + myRestaurant.hasDelivery + ".";

    

    // Add <h2> in the <div id="display">
    displayDiv.appendChild(restHeading);
    displayDiv.appendChild(restInfo);
}

/**
 * Gets all restaurant data from the form and
 * returns it in a Restaurant object.
 */
function getRestaurant():Restaurant{
    //Create restaurant
    let restaurant = new Restaurant();

    //populate with data from the form
    let nameInput = 
        <HTMLInputElement>document.getElementById("name");
    restaurant.name = nameInput.value;

    

    let ratingInput = 
        <HTMLInputElement>document.getElementById("rating");
    restaurant.rating = ratingInput.value;

    let hasDelivery = 
        <HTMLInputElement>document.getElementById("delivery");
        
        //restaurant.hasDelivery = hasDelivery.checked;
        
        if(hasDelivery.value == "Yes"){
            restaurant.hasDelivery = true;
        }
        else if(hasDelivery.value == "No" || hasDelivery.value == "Please select an option."){
            restaurant.hasDelivery = false;
        }

    let categoryInput =
        <HTMLInputElement>document.getElementById("category");
    restaurant.category = categoryInput.value;

    //return restaurant
    return restaurant;
}