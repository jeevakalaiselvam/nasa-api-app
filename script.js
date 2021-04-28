//Declare needed variables and contants
//Storing API KEY is not recommended without encrypting it first. Here it is used for demonstration purpose.
const API_KEY = "QxgBRdvklgyAi2Y60vNS9knNdaiAJ9a8CHOv2L2h";
const API_ASTRONOMY_PICTURE =
    "https://api.nasa.gov/planetary/apod?api_key=" + API_KEY + "&count=1";

const mainContainer = document.getElementById("main-container");

//Fetch a image and display on screen when user reaches website first
getAstronomyImageOfTheDay();

/**
 * This function fetches the data from NASA OPEN API generates element with the information
 */
async function getAstronomyImageOfTheDay() {
    const response = await fetch(API_ASTRONOMY_PICTURE);
    const data = await response.json();

    console.log(data);

    mainContainer.innerHTML = "";

    //Create a card based on information returned from API GET request
    const imageData = document.createElement("div");
    imageData.classList.add("astronomy-image-inner");
    imageData.innerHTML = `

        <h2>${data[0].title}</h2>   
        <i class="fas fa-redo-alt refresh" id="refresh"></i>
        <div class="inside-two">
        <img src="${data[0].url}"></img>
        <p>${data[0].explanation}</p>
        </div>
    `;

    //Append the card to the main container
    mainContainer.appendChild(imageData);

    //Register the refresh button so when the user clicks the button, New information is obtained
    const refreshBtn = document.getElementById("refresh");
    refreshBtn.addEventListener("click", () => {
        getAstronomyImageOfTheDay();
    });
}
