/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherData */ \"./src/modules/weatherData.js\");\n/* harmony import */ var _modules_renderDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderDOM */ \"./src/modules/renderDOM.js\");\n\n\n\n\nconst searchForm = document.querySelector(\"#search-box\");\nconst searchInput = document.querySelector(\"#search-input\");\nconst searchBtn = document.querySelector(\".submit-btn\");\n\nsearchForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n});\n\n\nsearchBtn.addEventListener(\"click\", async () => {\n    if(searchInput.value === \"\") return; //do nothing\n    const weatherInfo = await _modules_weatherData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeather(searchInput.value);\n    console.log(weatherInfo);\n    _modules_renderDOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].searchWeatherInfo(weatherInfo);\n});\n\n\n//# sourceURL=webpack://weather_app_project---js/./src/index.js?");

/***/ }),

/***/ "./src/modules/renderDOM.js":
/*!**********************************!*\
  !*** ./src/modules/renderDOM.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst renderDOM = ( () => {\n\n    function searchWeatherInfo(weatherInfo) {\n    \n    if(!weatherInfo) return //do nothing;\n\n    const searchResultDisplay = document.querySelector(\".weather-section\");\n    // searchResultDisplay.classList.add(\"active\");\n\n    const cityName = document.querySelector(\".city-name\");\n    const country = document.querySelector(\".country\");\n\n    const localtime = document.querySelector(\".date-time\");\n\n    const temperature = document.querySelector(\".temp-value\");\n\n    // const tempF = document.createElement(\"p\");\n\n    const cloudiness = document.querySelector(\".cloud-info\");\n    const feelsLike = document.querySelector(\".feels-like-info\");\n\n    const wind = document.querySelector(\".wind-value\");\n    const humidity = document.querySelector(\".humidity-value\");\n    const visibility = document.querySelector(\".visibility-value\");\n    const uvIndex = document.querySelector(\".uv-index-value\");\n\n    // Assign corresponding values to DOM elements`\n    cityName.textContent = `${weatherInfo.cityName},`;\n    country.textContent = `${weatherInfo.countryName}`;\n    localtime.textContent = `${weatherInfo.date_time}`;\n    // const timeFormat = new Date(localtime);\n    // console.log(timeFormat);\n    temperature.textContent = `${weatherInfo.tempC} °C`;\n    // tempF.textContent = `${weatherInfo.tempF}`;\n    // tempF.style.display = \"none\";\n    cloudiness.textContent = `${weatherInfo.cloudiness}`;\n    feelsLike.textContent = `Feels like  ${weatherInfo.feelsLike} °C`;\n    wind.textContent = `${weatherInfo.windValue} Km/h`;\n    humidity.textContent = `${weatherInfo.humidityValue} %`;\n    visibility.textContent = `${weatherInfo.visibility} km`;\n    uvIndex.textContent = `${weatherInfo.uvIndex}`;\n    }\n\n\n    return { \n            searchWeatherInfo \n        };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderDOM);\n\n//# sourceURL=webpack://weather_app_project---js/./src/modules/renderDOM.js?");

/***/ }),

/***/ "./src/modules/weatherData.js":
/*!************************************!*\
  !*** ./src/modules/weatherData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weatherData = ( () => {\n\n    function processData(data) {\n        const {\n            current: { temp_c: tempC,  temp_f: tempF, feelslike_c: feelsLike,  humidity: humidityValue, wind_kph: windValue, vis_km: visibility, uv: uvIndex,\n            condition: {\n                text: cloudiness,\n            } },\n            location: {name: cityName, country: countryName,\n            localtime: date_time}\n        } = data;\n\n\n        return { tempC, tempF, feelsLike, visibility, uvIndex, windValue, humidityValue, cityName, countryName, date_time, cloudiness }\n    }\n\n        \n    // Get weather data from  API\n    async function getWeather(city) {\n\n        try {\n            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5d67055185354dcbb8d231741231904&q=${city}`, { mode: 'cors'});\n            if(!response.ok) throw new Error(`This ${city} not found`)\n            // const data = await response.json();\n            const data = processData(await response.json());\n            // console.log(data);\n            return data;\n        } catch (error) {\n            alert(error);\n            return null;\n        }\n        \n    }\n    return { getWeather };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherData);\n\n\n\n//# sourceURL=webpack://weather_app_project---js/./src/modules/weatherData.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;