let mycity=document.getElementById('searched-city');
let weatherType=document.getElementById('weather-type');
let temperature=document.getElementById('current-temperature');
let humidity=document.getElementById('humidity');
let wind=document.getElementById('wind');
let time=document.getElementById('current-time');
let today=document.getElementById('current-day');

const apiKey = '1409a0e49b324c78bf5171658240206'; 
const city = 'London';

axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Bizerte?unitGroup=metric&key=WPJDRUSWUCWM5Q2VPSQ68QXGM&contentType=json`)
.then(response => {

    // city name 
    mycity.innerHTML = response.data.address;
    // time 
    time.innerHTML =response.data.currentConditions.datetime;
    // weather type 
    weatherType.innerHTML =response.data.currentConditions.conditions;
    // humidity 
    humidity.innerHTML =response.data.currentConditions.humidity;
    // temperature
    temperature.innerHTML =response.data.currentConditions.humidity;
    // wind speed 
    wind.innerHTML =response.data.currentConditions.windspeed;
    // datetime
    today.innerHTML =response.data.days[0].datetime;




  })
  .catch(error => console.log(error.message));
