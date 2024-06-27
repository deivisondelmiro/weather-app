export default class initShowNamesResults {
  constructor(element) {
    this.element = element;
    this.latitude;
    this.longitude;
    this.cityName;
  }
  showNamesResults(infoNameCity) {
    let arrayLatLong = [];
    let arrayNameCity = [];
    let cityListUl = document.querySelector(".cityList");
    let inputNameHidden = document.querySelector(".inputCityName");
    const infoNameCityArray = infoNameCity.results;
    if (Array.isArray(infoNameCityArray)) {
      infoNameCityArray.forEach((item, index) => {
        let li = document.createElement('li')
        li.innerText = `${item.name}, ${item.admin1}, ${item.country}`
        cityListUl.appendChild(li);
        arrayLatLong.push({index: index, latitude: item.latitude, longitude: item.longitude});
        arrayNameCity.push({index: index, name: item.name});
      })
      let li = document.querySelectorAll("li");
      if (li) {
        li.forEach((item, indexLi) => {
          item.addEventListener("click", () => {
            this.removeNamesResults();
            arrayLatLong.forEach((item, indexLatLong) => {
              if (indexLi == indexLatLong) {
                this.latitude = item.latitude;
                this.longitude = item.longitude;
              }
            })
            arrayNameCity.forEach((item, indexNameCity) => {
              if (indexLi == indexNameCity) {
                this.cityName = item.name;
                this.removeInputName(inputNameHidden)
              }
            })
            import('./getInfoCityAndShow.js').then(response => {
              const getInfo = response.default;
              const showInfo = new getInfo();
              showInfo.getInfoLatLong(this.latitude, this.longitude, this.cityName);
            })
          })
        })
      }
    }
  }
  removeNamesResults() {
    let li = document.querySelectorAll("li");
    if (li) {
      li.forEach((item) => {
        if (item.parentNode) {
          item.parentNode.removeChild(item);
        }
      })
    }
  }
  removeInputName(inputNameHidden) {
    let inputName = inputNameHidden;
    inputName.value = "";
  }
}