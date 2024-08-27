async function GetWeatherData(location, callback, errorCallback) {
  const rawResponse = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=UGB6PZTLSJWE8DK4RYD2W9SHJ`,
    { type: "cors" }
  );
  if (!rawResponse.ok) {
    errorCallback();
  }
  rawResponse.json().then((response) => {
    callback(response);
  });
}
function showWeatherData(data) {
  console.log(data);
}
GetWeatherData("Marrakech", showWeatherData);
