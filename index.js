function updateTime() {
  let londonElement = document.querySelector("#london");

  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");

    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("dddd Do MMMM YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }

  let losAngelesElement = document.querySelector("#los-angeles");

  if (losAngelesElement) {
    let losAnegelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAnegelesDateElement.innerHTML =
      losAngelesTime.format("dddd Do MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }

  let osloElement = document.querySelector("#oslo");

  if (osloElement) {
    let osloDateElement = osloElement.querySelector(".date");
    let osloTimeElement = osloElement.querySelector(".time");

    let osloTime = moment().tz("Europe/Oslo");

    osloDateElement.innerHTML = osloTime.format("dddd Do MMMM YYYY");
    osloTimeElement.innerHTML = osloTime.format("H:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;

  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimezone);
  let cityElement = document.querySelector("#cities");
  let cityName = cityTimezone.split("/")[1].replace("_", " ");

  cityElement.innerHTML = `<div class="city">
          <div class="city-time">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd Do MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "H:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;

  let homepageElement = document.querySelector("#homepage");
  homepageElement.innerHTML = `<a href="https://sbh-world-clock.netlify.app/">Back to homepage</a>`;
  homepageElement.classList.add("homepage");
}

setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
