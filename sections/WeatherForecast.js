function getForecastFor5Days(city){
    const defaultForecastURL = getForcastEndpoint(city);


    fetch(defaultForecastURL)
    .then((response) => response.json())
    .then((data) => {

        const {list} = data;

        let forcastsGroupedByDay = {};
        let forecastContainer = document.querySelector('.weather-forecast')
        forecastContainer.innerHTML = '';

        list.forEach((element) => {
           
            let {dt} = element;
            let day = getDayOfTheWeek(dt);

            if(forcastsGroupedByDay[day]) {
                forcastsGroupedByDay[day].push(element);
            }
            else {
                forcastsGroupedByDay[day] = [element];
            }
            
    });

    for (day in forcastsGroupedByDay) {

        forecastContainer.innerHTML += `<h3>${day}</h3>`


        forcastsGroupedByDay[day].forEach((element) => {
            
            let { main, weather, dt } = element;
            let description = weather[0].description;
            let weatherIcon = getWeatherIcon(weather[0].icon);
            let temperature = Math.round(main.temp);
            let realFeel = Math.round(main.feels_like);
            let currentTime = getTime(dt);

            forecastContainer.innerHTML += ` 
            <div class="forecast-day-container">
              <div class="forecast d-flex justify-content-between align-items-center border rounded p-3 mb-5">
                <div class="">${currentTime}</div>
                <img class="weather-icon" src="${weatherIcon}" />
                <strong class="">${temperature}°C</strong>
                <div class="">${description}</div>
                <div class=""> Real Feel: <strong class="">${realFeel}°C</strong></div>
              </div>
            </div>`;

        });



    }

    });
}