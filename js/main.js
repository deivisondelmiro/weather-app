import initGetCityName from './modules/getCityName.js';

const inputCityName = document.querySelector(".inputCityName");
let getCityName = new initGetCityName(inputCityName, ".inputCityName");
getCityName.start()