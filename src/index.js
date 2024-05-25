function updateTime() {
  let albuquerqueElement = document.querySelector("#albuquerque");
  if (albuquerqueElement) {
  }
  let albuquerqueDateElement =
    albuquerqueElement.querySelector("#albuquerque-date");
  let albuquerqueTimeElement =
    albuquerqueElement.querySelector("#albuquerque-time");
  let albuquerqueTime = moment().tz("America/Denver");

  albuquerqueDateElement.innerHTML = albuquerqueTime.format("MMMM Do YYYY");
  albuquerqueTimeElement.innerHTML = albuquerqueTime.format(
    "h:mm:ss[<small>]A[</small]>"
  );
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
  }
  let parisDateElement = parisElement.querySelector("#paris-date");
  let parisTimeElement = parisElement.querySelector("#paris-time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss[<small>]A[</small]>");
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date" id="albuquerque-date">${cityTime.format(
              "MMMM Do YYYY"
            )}</div>
          </div>
          <div>
            <div class="time" id="albuquerque-time">${cityTime.format(
              "h:mm:ss"
            )}<small>${cityTime.format("A")}</small> </div>
          </div>
        </div>`;
}
let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
