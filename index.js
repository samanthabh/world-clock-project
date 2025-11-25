function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");

  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("dddd Do MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAnegelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAnegelesDateElement.innerHTML = losAngelesTime.format("dddd Do MMMM YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );
}

setInterval(updateTime, 1000);
