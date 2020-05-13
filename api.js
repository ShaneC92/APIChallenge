const baseURL = "https://ghibliapi.herokuapp.com/people";
let url;

const submitBtn = document.querySelector(".submit");
const section = document.querySelector(".searchResults");

submitBtn.addEventListener("click", fetchResults);

function fetchResults(e) {
    e.preventDefault();
    console.log(e);
    url = baseURL;
    console.log(url);

    fetch(url)
    .then(function(results) {
        return results.json();
    })
    .then(function(json) {
        displayResults(json);
    })


}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    console.log("DisplayResults", json);
    let people = json;

    if(people.length === 0) {
        console.log("No Results");
    } else {
        for(let i = 0; i < people.length; i++) {
            console.log(i);

            let people = document.createElement("article");
            let heading = document.createElement("h2");



            people.appendChild(heading);
            section.appendChild(people);
        }
    }

}