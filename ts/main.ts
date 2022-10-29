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
function isAllDataValid(){
    return true;
}

function displayRestaurant(myRestaurant:Restaurant):void{
    //Display Restaurant below the form.
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
        
        if(hasDelivery.checked){
            restaurant.hasDelivery = true;
        }
        else{
            restaurant.hasDelivery = false;
        }

    let categoryInput =
        <HTMLInputElement>document.getElementById("category");
    restaurant.category = categoryInput.value;

    //return restaurant
    return restaurant;
}