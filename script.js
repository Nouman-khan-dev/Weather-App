const container = document.querySelector(".container")
const search = document.querySelector(".search-box button")
const weatherBox = document.querySelector(".weather-box")
const weatherDetails = document.querySelector(".weather-details")
let input = document.querySelector(".search-box input");
const temp = document.querySelector(".temprature");
const humidity = document.querySelector("#humidity")
const wind = document.querySelector("#wind")
const description = document.querySelector(".description");
const image = document.querySelector('.image');

search.addEventListener("click", async () => {

	const APIKey = "f689b473b1mshff2dd9a2a27f57ep166fafjsn3bf59be93278"

	if(input.value == ""){
		console.log("please enter a valid city name");
		// alert("please enter a valid city name")
	}else{
		checkWeather();
	}
	

});

async function checkWeather() {

	const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${input.value}&format=json&u=f`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'f689b473b1mshff2dd9a2a27f57ep166fafjsn3bf59be93278',
			'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
		}
	};
	try{
	const weatherData = await fetch(url , options).then(response => response.json());
	console.log(weatherData);
	temp.innerHTML = `${Math.floor((weatherData.current_observation.condition.temperature -32) * 5/9)} <span>&degC</span>`;
	let descDet = weatherData.current_observation.condition.text;
	description.innerHTML = descDet;
	humidity.innerHTML = `${weatherData.current_observation.atmosphere.humidity}%`
	wind.innerHTML = `${weatherData.current_observation.wind.speed} Km/h`;

	if(descDet == "Cloudy" || descDet == "Mostly Cloudy"){
		image.src = "images/mist.png"
	}
	if(descDet == "Partly Cloudy"){
		image.src = "images/cloud.png"
	}
	if(descDet == "Rain"||  descDet == "Showar"){
		image.src = "images/rain.png"
	}
	if(descDet == "Clear" || descDet == "Fair" || descDet == "Haze"){
		image.src = "images/clear.png"
	}
	
	if(descDet == "Snow"){
		image.src = "images/snow.png"
	}
	if(descDet == "Snow"){
		image.src = "images/snow.png"
	}
}catch(error){
	alert("please enter a valid city name")
}
}