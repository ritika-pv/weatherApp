const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b374777e82mshd2bef6cb2f1efd8p1bc5e3jsn034675637120',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



const getWeather = (city) => {
	cityName.innerHTML= city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>{ 
		console.log(response)


		

			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset

	})
	.catch(err => console.error(err));
}



submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
})
getWeather('delhi');


//common places

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
	.then(response => response.json())
	.then(response =>{ 
		console.log(response)
h1.innerHTML = response.cloud_pct
h2.innerHTML = response.feels_like
h3.innerHTML = response.humidity
h4.innerHTML = response.max_temp
h5.innerHTML = response.min_temp
h6.innerHTML = response.sunrise
h7.innerHTML = response.sunset
h8.innerHTML = response.temp
h9.innerHTML = response.wind_degrees
h10.innerHTML = response.wind_speed




})
.catch(err => console.error(err));




fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	.then(response => response.json())
	.then(response =>{ 
		console.log(response)
blr1.innerHTML = response.cloud_pct
blr2.innerHTML = response.feels_like
blr3.innerHTML = response.humidity
blr4.innerHTML = response.max_temp
blr5.innerHTML = response.min_temp
blr6.innerHTML = response.sunrise
blr7.innerHTML = response.sunset
blr8.innerHTML = response.temp
blr9.innerHTML = response.wind_degrees
blr10.innerHTML = response.wind_speed




})
.catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
	.then(response => response.json())
	.then(response =>{ 
		console.log(response)
p1.innerHTML = response.cloud_pct
p2.innerHTML = response.feels_like
p3.innerHTML = response.humidity
p4.innerHTML = response.max_temp
p5.innerHTML = response.min_temp
p6.innerHTML = response.sunrise
p7.innerHTML = response.sunset
p8.innerHTML = response.temp
p9.innerHTML = response.wind_degrees
p10.innerHTML = response.wind_speed




})
.catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Indore', options)
	.then(response => response.json())
	.then(response =>{ 
		console.log(response)
i1.innerHTML = response.cloud_pct
i2.innerHTML = response.feels_like
i3.innerHTML = response.humidity
i4.innerHTML = response.max_temp
i5.innerHTML = response.min_temp
i6.innerHTML = response.sunrise
i7.innerHTML = response.sunset
i8.innerHTML = response.temp
i9.innerHTML = response.wind_degrees
i10.innerHTML = response.wind_speed




})
.catch(err => console.error(err));




fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhopal', options)
	.then(response => response.json())
	.then(response =>{ 
		console.log(response)
b1.innerHTML = response.cloud_pct
b2.innerHTML = response.feels_like
b3.innerHTML = response.humidity
b4.innerHTML = response.max_temp
b5.innerHTML = response.min_temp
b6.innerHTML = response.sunrise
b7.innerHTML = response.sunset
b8.innerHTML = response.temp
b9.innerHTML = response.wind_degrees
b10.innerHTML = response.wind_speed




})
.catch(err => console.error(err));
