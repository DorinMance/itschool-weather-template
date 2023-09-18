const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");


let city = "București";
updateCity(city);

function updateWeather(currentCity){
    city = currentCity;
    updateCity(city);
    displayCurrentWeather(city);
};

function updateCity(city){
    let cityNameElement = document.querySelector('.city-name');
    cityNameElement.innerText = city;
};


bucharest.addEventListener('click', function(){

    updateWeather('București');
});

timisoara.addEventListener('click', function(){

    updateWeather('Timișoara');
});

oradea.addEventListener('click', function(){

    updateWeather('Oradea');
});