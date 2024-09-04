const weatherData = (() => {
  function processData(data) {
    const {
      current: {
        temp_c: tempC,
        temp_f: tempF,
        feelslike_c: feelsLike,
        humidity: humidityValue,
        wind_kph: windValue,
        vis_km: visibility,
        uv: uvIndex,
        condition: { text: cloudiness },
      },
      location: { name: cityName, country: countryName, localtime: date_time },
    } = data;

    return {
      tempC,
      tempF,
      feelsLike,
      visibility,
      uvIndex,
      windValue,
      humidityValue,
      cityName,
      countryName,
      date_time,
      cloudiness,
    };
  }

  // Get weather data from  API
  async function getWeather(city) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=5d67055185354dcbb8d231741231904&q=${city}`,
        { mode: "cors" }
      );
      if (!response.ok) throw new Error(`This ${city} not found`);
      // const data = await response.json();
      const data = processData(await response.json());
      // console.log(data);
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }
  return { getWeather };
})();

export default weatherData;
