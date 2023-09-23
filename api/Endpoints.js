var API_KEY = "0a55dd6c942f367a297dbf6a2eed6472";
var language = 'ro';
function getCurrentWeatherDataUrl(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=${language}&units=metric`;
}

function getForcastEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&lang=${language}&units=metric`;
}
