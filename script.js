const API_KEY = "QxgBRdvklgyAi2Y60vNS9knNdaiAJ9a8CHOv2L2h";
const API_ASTRONOMY_PICTURE =
    "https://api.nasa.gov/planetary/apod?api_key=" + API_KEY + "&count=1";

const mainContainer = document.getElementById("main-container");

getAstronomyImageOfTheDay();

async function getAstronomyImageOfTheDay() {
    const response = await fetch(API_ASTRONOMY_PICTURE);
    const data = await response.json();

    console.log(data);

    mainContainer.innerHTML = "";

    const imageData = document.createElement("div");
    imageData.classList.add("astronomy-image-inner");
    imageData.innerHTML = `
        <i class="fas fa-redo-alt refresh"></i>
        <h2>${data[0].title}</h2>
        <img src="${data[0].url}"></img>
        <p>${data[0].explanation}</p>
    `;

    mainContainer.appendChild(imageData);
}

//<img src="${}" alt="${}" />
