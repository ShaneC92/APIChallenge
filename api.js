const baseURL = "https://ghibliapi.herokuapp.com/people";
let url;

const submitBtn = document.querySelector(".submit");
const section = document.querySelector(".searchResults");

submitBtn.addEventListener("click", fetchResults);

function fetchResults(e) {
    e.preventDefault();
    console.log(e);
    url = `${baseURL}`;
    console.log(url);

    fetch(url)
    .then(function(results) {
        console.log(results);
        return results.json();
    })
    .then(function(json) {
        console.log(json);
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

        let randomValue = Math.floor(Math.random() * (people.length - 0 ) + 0);
        let current = people[randomValue];

            let article = document.createElement("article");
            let name = document.createElement("h1")
            let heading = document.createElement("h2");
            let gender = document.createElement("p");
            let ageInfo = document.createElement("p")
            let eyecolorInfo = document.createElement("p");
            
            name.textContent = "Name: " + current.name;
            gender.innerText = "Gender: " + current.gender;
            
            if (current.age) {
                ageInfo.innerText = "Age: " + current.age;
            } else {
                ageInfo.innertext = "Age: Unknown";
            }

            eyecolorInfo.innerText = "Eye Color: " + current.eye_color;
      
            article.appendChild(heading);
            heading.appendChild(name);
            heading.appendChild(gender);
            heading.appendChild(ageInfo);
            heading.appendChild(eyecolorInfo);
            section.appendChild(article);


            // let people = document.createElement("article");
            // let heading = document.createElement("h2");

            // // people.appendChild(heading);
            // section.appendChild(people);
        }   
    

}