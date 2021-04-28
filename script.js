const API_KEY = "QxgBRdvklgyAi2Y60vNS9knNdaiAJ9a8CHOv2L2h";
const API_ASTRONOMY_PICTURE = "http://api.openweathermap.org/data/2.5/forecast";

const astronomyImageButton = document.getElementById("astronomy-image");
const mainContainer = document.getElementById("main-container");

async function getAstronomyImageOfTheDay() {
    const response = await fetch("API_ASTRONOMY_PICTURE");
    const responseData = await response.json();

    console.log(responseData);
}

astronomyImageButton.addEventListener("click", () => {
    getAstronomyImageOfTheDay();
});
