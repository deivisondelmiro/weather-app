export default class initGetCityName {
  constructor(inputCityName, input) {
    this.inputCityName = inputCityName;
    this.input = input;
  }
  searchCityName(inputCityName) {
    async function searchNameCities(nameCity) {
      try {
        let tempoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${nameCity}&count=3&language=pt&format=json`);
        let infoNameCity = await tempoResponse.json();
        import('./showNamesResults.js').then(response => {
          const showNames = response.default;
          const classShowNames = new showNames();
          classShowNames.removeNamesResults()
          classShowNames.showNamesResults(infoNameCity);
        })
      } catch (error) {
        console.log(error);
      }
    }
    searchNameCities(inputCityName);
  }
  inputCitiesNames() {
    let inputCityName = document.querySelector(this.input);
    let inputCityNameWithoutSpaces = inputCityName.value.trim()
    this.searchCityName(inputCityNameWithoutSpaces);
    
  }
  startGettingName() {
    this.inputCityName.addEventListener("keyup", () => {
      this.inputCitiesNames();
    });
  }
  start() {
    this.startGettingName();
    return this;
  }
}
