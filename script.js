const inputBox=document.getElementById("city-input");
const searchBtn=document.getElementById("search-btn");
const tempDiv=document.getElementById("temp");
const weatherDiv=document.getElementById("weather");
const minmaxDiv=document.getElementById("minmax");
const cityDiv=document.getElementById("city");



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b1a89a4417msh4702a8401976ad9p1e92eejsn6998f828b7a7',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

const forecast=(city)=>{
  const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
  fetch(url,options)
  .then(response => response.json())
  .then(data => {
    const cityName=data.name;
    cityDiv.innerHTML=`<h2>${cityName}</h2>`
    const weather=data.weather[0].main;
    weatherDiv.innerHTML=`<h3>Weather:${weather}</h3>`
    const temp=data.main.temp;
    tempDiv.innerHTML=`<h2>Temp:${temp}°F</h2>`
    const minTemp=data.main.temp_min;
    const maxTemp=data.main.temp_max;
    minmaxDiv.innerHTML=`<h2>Min-Temp:${minTemp}°F</h2><h2>Max-Temp:${maxTemp}°F</h2>`
  })
  .catch(err =>console.log(err))
}
searchBtn.onclick =()=>{
  const city=inputBox.value
  if(city!=""){
  forecast(city);
  }else{
    cityDiv.innerHTML=`<h2>---</h2>`
    
    weatherDiv.innerHTML=`<h3>Weather:---</h3>`
    
    tempDiv.innerHTML=`<h2>Temp:---</h2>`
    
    minmaxDiv.innerHTML=`<h2>Min-Temp:---</h2><h2>Max-Temp:---</h2>`
  }
}