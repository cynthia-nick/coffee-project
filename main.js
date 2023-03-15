"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffees">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

const search = () => {
    // Get what the user inputs in the input field
    const searchBoxInput = document.getElementById("coffeeName").value.toLowerCase();
    // Get a list of all the elements that have the names of the coffees
    const coffeeElements = document.querySelectorAll("div.coffees h1");
    // Loop over the nodeList we just got
    for (let i = 0; i < coffeeElements.length; i++) {
        // If the element's inner HTML, lower-cased doesn't include what the user input
        if (!coffeeElements[i].innerHTML.toLowerCase().includes(searchBoxInput)){
            // then we set that element's parent to not display
            coffeeElements[i].parentNode.style.display = 'none';
            // but otherwise, if it does include what the user input
        } else {
            // then we set that element's parent to display
            coffeeElements[i].parentNode.style.display = "";
        }
    }
}
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    // get the value of the dropdown menu
    let selectedRoast = roastSelection.value
    // create an empty array
    let filteredCoffees = [];
    // loop through the coffees array
    coffees.forEach(function(coffee) {
        // if the coffee roast matches what the user entered
        if (selectedRoast === "all") {
            filteredCoffees = coffees;
        } else {
        if (coffee.roast === selectedRoast) {
            // we push that coffee into our new array
            filteredCoffees.push(coffee);
        }
        }

    });
    console.log(filteredCoffees);
    // then we run the renderCoffees function and set the html of tbody to equal its return value
    coffeeNames.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


let coffeeNames = document.querySelector('#coffees');
let submitButton = document.querySelector('#searchSubmit');
let roastSelection = document.querySelector('#roast-selection');

coffeeNames.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

// every time there is a keyup event on the element with the id of coffeeName
// trigger the search function
document.querySelector("#coffeeName").addEventListener('keyup', search);

