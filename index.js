'use strict';
//data
const arrList = ["Image Generator using OpenAI", "Get Answers using OpenAI"]

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
