const apikey="805f106b2add7383f125973514a1b90c";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector('.search input');
const searchbtn=document.querySelector('.search button');
const weathericon=document.querySelector('.weather-icon');
const errdiv= document.querySelector('.error');
const weatherdiv=document.querySelector('.weather');
async function checkweather(city){
    var response=await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status==404)
    {
       errdiv.style.display="block";
        weatherdiv.style.display="none";
    }
    else{
        var data=await response.json();
        console.log(data);
        errdiv.style.display="none";
        weatherdiv.style.display="block";
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + "°C";
        //console.log(ele);
        document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
        document.querySelector('.Wind').innerHTML=data.wind.speed+"km/hr";
        //console.log(hum);
        //console.log(wind);
        if(data.weather[0].main=="Clouds")
        {
            weathericon.src="./cloudy.png";
        }
        else if(data.weather[0].main=="Clear")
        {
            weathericon.src="./sun.png";
        }
        else if(data.weather[0].main=="Rain")
        {
            weathericon.src="./rain.png";
        }
        else if(data.weather[0].main=="Wind")
        {
            weathericon.src="./wind.png";
        }
        else if(data.weather[0].main=="Snow")
        {
            weathericon.src="./snow.png";
        }
        else if(data.weather[0].main=="Storm")
        {
            weathericon.src="./storm.png";
        }
        // document.querySelector(".error").style.display="block";
        // document.querySelector(".weather").style.display="none";
    }
}
searchbtn.addEventListener('click',() =>
{
    checkweather(searchbox.value);
});