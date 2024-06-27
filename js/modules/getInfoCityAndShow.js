export default class getInfoCityAndShow {
  constructor() {
    this.latitude;
    this.longitude;
  }
  getInfoLatLong(latitude, longitude, nameCity) {
    async function infoLatLong() {
      try {
        let nameCurrentCity = await nameCity;
        let infoFetch = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m&hourly=temperature_2m&daily=temperature_2m_max&past_days=2&forecast_days=3&timezone=auto&current=rain`);
        let allInfo = await infoFetch.json();
        import('./showInfosScreen.js').then(response => {
          const sendInfo = response.default;
          const infos = new sendInfo();
          infos.getElementsHTML(allInfo, nameCurrentCity);
        })
      } catch (error) {
        console.log(error);
      }
    }
    infoLatLong();
  }
}