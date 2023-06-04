
const renderDOM = ( () => {

    function searchWeatherInfo(weatherInfo) {
    
    if(!weatherInfo) return //do nothing;

    const searchResultDisplay = document.querySelector(".weather-section");
    // searchResultDisplay.classList.add("active");

    const cityName = document.querySelector(".city-name");
    const country = document.querySelector(".country");

    const localtime = document.querySelector(".date-time");

    const temperature = document.querySelector(".temp-value");

    // const tempF = document.createElement("p");

    const cloudiness = document.querySelector(".cloud-info");
    const feelsLike = document.querySelector(".feels-like-info");

    const wind = document.querySelector(".wind-value");
    const humidity = document.querySelector(".humidity-value");
    const visibility = document.querySelector(".visibility-value");
    const uvIndex = document.querySelector(".uv-index-value");

    // Assign corresponding values to DOM elements`
    cityName.textContent = `${weatherInfo.cityName},`;
    country.textContent = `${weatherInfo.countryName}`;
    localtime.textContent = `${weatherInfo.date_time}`;
    // const timeFormat = new Date(localtime);
    // console.log(timeFormat);
    temperature.textContent = `${weatherInfo.tempC} °C`;
    // tempF.textContent = `${weatherInfo.tempF}`;
    // tempF.style.display = "none";
    cloudiness.textContent = `${weatherInfo.cloudiness}`;
    feelsLike.textContent = `Feels like  ${weatherInfo.feelsLike} °C`;
    wind.textContent = `${weatherInfo.windValue} Km/h`;
    humidity.textContent = `${weatherInfo.humidityValue} %`;
    visibility.textContent = `${weatherInfo.visibility} km`;
    uvIndex.textContent = `${weatherInfo.uvIndex}`;
    }


    return { 
            searchWeatherInfo 
        };
})();

export default renderDOM;