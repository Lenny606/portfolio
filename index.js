'use strict';
//data
const arrList = ["Image Generator using OpenAI", "Get Answers using OpenAI", "Spotify App using OpenAI"];


//variables
const projectsList = document.querySelector(".projects_list")
const projectsTitle = document.querySelector(".projects_title")
const screenshotImg = document.querySelector("#screenshot")



//handlers

function listHandler() {
    for (const el of arrList) {
        const li = document.createElement('li')
        li.addEventListener("click", screenshotHandler)
        projectsList.appendChild(li).innerHTML = el

    }
    projectsTitle.removeEventListener("click", listHandler)
}

function screenshotHandler() {
    screenshotImg.className = "screenshot_visible"
}

projectsTitle.addEventListener("click", listHandler)


// //////////////////////////////////////////////
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

const rest = new Map();
rest.set("name", "toms bistro");
rest.set(2, "praga")
rest.set(3, "praga10").set("open", "10-10").set(true, "we are open in Prague")


console.log(rest.get("name"));
console.log(rest.get(rest.get(2) === "praga"));
rest.has("name")
rest.delete(2)
rest.size
rest.clear()

console.log(rest.size);

rest.set([1, 2], "test") // save key-value pair into variable
rest.clear()
const arr = [1, 2]
rest.set(arr, "test") //reference to array
