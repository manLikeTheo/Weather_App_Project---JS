import weatherData from "./modules/weatherData";
import renderDOM from "./modules/renderDOM";


const searchForm = document.querySelector("#search-box");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector(".submit-btn");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
});


searchBtn.addEventListener("click", async () => {
    if(searchInput.value === "") return; //do nothing
    const weatherInfo = await weatherData.getWeather(searchInput.value);
    console.log(weatherInfo);
    renderDOM.searchWeatherInfo(weatherInfo);
});
