"use strict"


function renderCoffee(coffee) {
    var html = '<div class="col-12 col-lg-6 coffee d-flex align-items-baseline">';
    html += '<h4 class="mr-2">' + coffee.name + '</h4>';
    html += '<p class="text-muted">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;

    var filteredCoffees = [];


    coffees.forEach(function(coffee) {
        if (selectedRoast === allCoffees.value) {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }



    });
    coffeesContainer.innerHTML = renderCoffees(filteredCoffees);
}

function inputSearch (e) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.includes((searchedCoffee.value).toLowerCase())) {
            html += renderCoffee(coffees[i]);
        }
    }
    // return html;
    coffeesContainer.innerHTML = html;
}


function addCoffee (e) {
    e.preventDefault();

    var newCoffeeObject = {};
    newCoffeeObject.id = coffees.length + 1;
    newCoffeeObject.name = newCoffee.value;
    newCoffeeObject.roast = newRoast.value;



    coffees.push(newCoffeeObject);

    console.log(coffees);

    renderCoffees(coffee);
}




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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
// var input = document.querySelector('input');
var coffeesContainer = document.querySelector('#coffees');
var searchedCoffee = document.getElementById('coffee-name');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var allCoffees = document.getElementById("all");

var newCoffee = document.getElementById('add-coffee-name');
var newRoast = document.getElementById('add-roast');
var submitToAdd = document.querySelector('#add-coffee-submit');





coffeesContainer.innerHTML = renderCoffees(coffees);

searchedCoffee.addEventListener('keyup', inputSearch, false);
submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener("change", updateCoffees);

submitToAdd.addEventListener('click', addCoffee);