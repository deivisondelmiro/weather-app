export default class ShowInfosScreen {
  constrcutor(element) {
    this.element = element;
  }
  getElementsHTML(allInfo, nameCity) {
    let currentCity = document.querySelector("#cityNameTitle");
    let currentTemperature = document.querySelector("#currentTemperature");
    let windInfo = document.querySelector("#windInfo");
    let apparentInfo = document.querySelector("#apparentInfo");
    let humidityInfo = document.querySelector("#humidityInfo");
    let temperatureYesterday = document.querySelector("#temperatureYesterday");
    let temperatureTodayMaximum = document.querySelector("#temperatureTodayMaximum");
    let temperatureTomorrow = document.querySelector("#temperatureTomorrow");

    let mainImgWeather = document.querySelector("#mainImgWeather");
    let imgTemperatureYesterday = document.querySelector("#imgYesterday");
    let imgTemperatureTodayMaximum = document.querySelector("#imgToday");
    let imgTemperatureTomorrow = document.querySelector("#imgTomorrow");

    let raining = allInfo.current.rain;
    let isDayNight = allInfo.current.is_day;

    let apiCurrentCity = nameCity;
    let apiCurrentTemperature = Math.round(allInfo.current.temperature_2m);
    let apiCurrentWind = Math.round(allInfo.current.wind_speed_10m);
    let apiCurrentApparent = Math.round(allInfo.current.apparent_temperature);
    let apiCurrentHumidity = Math.round(allInfo.current.relative_humidity_2m);
    let apiYesterday = Math.round(allInfo.daily.temperature_2m_max[1]);
    let apiCurrentMaximum = Math.round(allInfo.daily.temperature_2m_max[2]);
    let apiTomorrow = Math.round(allInfo.daily.temperature_2m_max[3]);

    function attImgWeather(valueTemperature, img) {
      let valueCurrentTemperature = Number.parseInt(valueTemperature);
      if (valueCurrentTemperature >= 28) {
        img.src = "./img/sun-warm-icon.png";
      } else if (valueCurrentTemperature >= 25){
        img.src = "./img/day-cloudy-icon.png";
      } else if (valueCurrentTemperature < 25 ) {
        img.src = "./img/cloudy-icon.png";
      }
    }

    function attMainImgWeather(valueTemperature, isDay, raining, img) {
      let valueCurrentTemperature = Number.parseInt(valueTemperature);
      if (valueCurrentTemperature >= 25 && isDay == 1 && raining >= 1) {
        img.src = "./img/day-cloud-rain-icon.png";
      } else if (valueCurrentTemperature >= 25 && isDay == 1 && raining == 0) {
        img.src = "./img/sun-warm-icon.png";
      } else if (valueCurrentTemperature >= 25 && isDay == 0 && raining >= 1) {
        img.src = "./img/night-cloud-rain-icon.png";
      } else if (valueCurrentTemperature >= 25 && isDay == 0 && raining == 0) {
        img.src = "./img/night-cloudy-icon.png";
      } else if (valueCurrentTemperature < 25 && isDay == 1 && raining >= 1) {
        img.src = "./img/day-cloud-rain-icon.png";
      } else if (valueCurrentTemperature < 25 && isDay == 1 && raining == 0) {
        img.src = "./img/day-cloudy-icon.png";
      } else if (valueCurrentTemperature < 25 && isDay == 0 && raining >= 1) {
        img.src = "./img/night-cloud-rain-icon.png";
      } else if (valueCurrentTemperature < 25 && isDay == 0 && raining == 0) {
        img.src = "./img/night-cloudy-icon.png";
      }
    }

    attMainImgWeather(apiCurrentTemperature, isDayNight, raining, mainImgWeather);
    attImgWeather(apiYesterday, imgTemperatureYesterday);
    attImgWeather(apiCurrentMaximum, imgTemperatureTodayMaximum);
    attImgWeather(apiTomorrow, imgTemperatureTomorrow);

    currentCity.innerText = apiCurrentCity;
    currentTemperature.innerText = apiCurrentTemperature;
    windInfo.innerText = apiCurrentWind;
    apparentInfo.innerText = apiCurrentApparent;
    humidityInfo.innerText = apiCurrentHumidity;
    temperatureYesterday.innerText = apiYesterday;
    temperatureTodayMaximum.innerText = apiCurrentMaximum;
    temperatureTomorrow.innerText = apiTomorrow;
  }
}