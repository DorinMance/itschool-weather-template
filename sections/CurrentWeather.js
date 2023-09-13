function displayCurrentWeather() {
    const defaultCityWeatherUrl = getCurrentWeatherDataUrl("Bucharest");


    fetch(defaultCityWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
       debugger;
        const { name, main, weather, wind, dt } = data;

       const currentDayOfTheWeek = getDayOfTheWeek(dt);
       const currentTime = getTime(dt);

        const temperature = main.temp;
        const realFeel = main.feels_like;
        const description = weather[0].description;
        const windSpeed = wind.speed;


        const weatherIcon = getWeatherIcon(weather[0].icon);


        let weatherContainer = document.querySelector(".current-weather");
        weatherContainer.innerHTML = `
        <div class="px-3">
        <div class="fs-2 mb-2"><strong>${name}</strong></div>
        <div class="fs-4"><strong>${currentDayOfTheWeek}</strong>, ${currentTime}</div>
        <div class="d-flex align-items-center justify-content-center">
          <strong class="fs-1">${temperature}°C</strong>
          <img src="${weatherIcon}" />
        </div>
      </div>
      <div class="px-3">
        <p class="fs-5">Real feel: <strong>${realFeel}°C</strong></p>
        <p class="fs-5 text-capitalize">${description}</p>
        <p class="fs-5">Vânt: <strong>${windSpeed} km/h</strong></p>
      </div>
        `;

    });
}