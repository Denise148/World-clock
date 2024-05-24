function updateTime() {
  let albuquerqueElement = document.querySelector("#albuquerque");
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
  let parisDateElement = parisElement.querySelector("#paris-date");
  let parisTimeElement = parisElement.querySelector("#paris-time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss[<small>]A[</small]>");
}
updateTime();
setInterval(updateTime, 1000);
