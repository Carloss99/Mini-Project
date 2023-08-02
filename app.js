window.onload = () => {
alert("Click next to begin!")

let question = document.querySelector("#question")
let choice1 = document.querySelector("#choice1")
let choice2 = document.querySelector("#choice2")
let choice3 = document.querySelector("#choice3")
let next = document.querySelector("#next-button")
let output = document.querySelector("#output")
let questionCount = document.querySelector("#question-count")
let correctOut = document.querySelector("#correct")
let wrongOut = document.querySelector("#wrong")
let correct = 0
let wrong = 0
let count = 0
let choices
let values


const questions = [{
    question: "What planet is Luke Skywalker from?",
    choices:{
            "Tatooine": true,
            "Endor": false,
            "Naboo": false
        },
    answer: () => {
        
        fetch(`https://swapi.dev/api/planets/1/`)
        .then((data) =>data.json(), (err) => console.log("No Response"))
        .then((planet) => {
            output.innerText = `The answer is ${planet.name}`
    })        
    } ,
    answered: false

},
{
    question: "What year did the first Star wars movie come out?",
    choices:{
        "2000": false,
        "1983": false,
        "1977": true
    },
    answer: () => {
        fetch(`https://swapi.dev/api/films/1/`)
        .then((data) =>data.json(), (err) => console.log("No Response"))
        .then((film) => {
            output.innerText = `The release date was ${film.release_date}`
        })
    },
    answered: false
},
{
    question: "What species is Chewbacca",
    choices: {
        "Human":false,
        "bear": false,
        "Wookiee": true
    },
    answer: () => {
    fetch(`https://swapi.dev/api/species/3/`)
    .then((data) =>data.json(), (err) => console.log("No Response"))
    .then((species) => {
        
        output.innerText = `The answer is ${species.name}`
    })},
    answered: false
},
{
    question: "Who created star wars?",
    choices: {
        "Gary Kurtz": false,
        "George Lucas": true,
        "Rick McCallum": false
    },
    answer: () => {
        fetch(`https://swapi.dev/api/films/1/`)
        .then((data) =>data.json(), (err) => console.log("No Response"))
        .then((film) => {
            console.log(film)
            output.innerText = `The answer is ${film.director}`
        })
    },
    answered: false
},
{
    question: "Who is Luke and Leia's father",
    choices: {
        "yoda":false,
        "Chewbacca": false,
        "Darth Vader": true
    },
    answer: () => {
        fetch(`https://swapi.dev/api/people/4/`)
        .then((data) =>data.json(), (err) => console.log("No Response"))
        .then((people) => {
            console.log(people.name)
            output.innerText = `The answer is ${people.name}`
        })
    },
    answered: false
},]

   
}
