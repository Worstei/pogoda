const ApiKey = "83b756b3e14ca9dce5754d80078e1325";
const covertToCelsius = (temp) => {
    const result = `${(temp - 273.15).toFixed(1)}°C`;
    return result;
}


const showWeather = (weather) => {
    console.log(weather)
    const city = document.getElementById("cityname");
    city.textContent = weather.name
    const country = document.getElementById("country")
    country.textContent = weather.sys.country;
    const clouds = document.getElementById("clouds")
    clouds.textContent = weather.clouds.all
    const fl = document.getElementById("fl")
    fl.textContent = covertToCelsius(weather.main.feels_like)
const hum = document.getElementById("hum")
hum.textContent = weather.main.humidity
const pres = document.getElementById("pres")
pres.textContent = weather.main.pressure
const temp = document.getElementById("temp")
temp.textContent = covertToCelsius(weather.main.temp)
const tpmx = document.getElementById("tpmx")
tpmx.textContent = covertToCelsius(weather.main.temp_max)
const tpmn = document.getElementById("tpmn")
tpmn.textContent = covertToCelsius(weather.main.temp_min)
const clon = document.getElementById("clon")
clon.textContent = weather.coord.lon
const clat = document.getElementById("clat")
clat.textContent = weather.coord.lat



}


const getWeatherByLocation = (info) => {
    const lon = info.coords.longitude;
    const lat = info.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`;
    fetch(url)
        .then((res) => res.json())
        .then((res) => showWeather(res))
}
const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => getWeatherByLocation(pos))
}

getMyLocation();



function zegarek()
        {
            var data = new Date();
            var godzina = data.getHours();
            var minuta = data.getMinutes();
            var sekunda = data.getSeconds();
            var dzien = data.getDate();
            var dzienN = data.getDay();
            var miesiac = data.getMonth();
            var rok = data.getFullYear();
           
            if (minuta < 10) minuta = "0" + minuta;
            if (sekunda < 10) sekunda = "0" + sekunda;
           
            var dni = new Array("niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota");
            var miesiace = new Array("stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia");
           
            var pokazDate = "Dzisiaj jest " + dni[dzienN] + ', ' + dzien + ' ' + miesiace[miesiac] + ' ' + rok + " roku.<br />Godzina " + godzina + ':' + minuta + ':' + sekunda;
            document.getElementById("zegar").innerHTML = pokazDate;
           
            setTimeout(zegarek, 1000);            
        }        

