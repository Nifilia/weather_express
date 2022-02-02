const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const key = "ae283fd21026f903724fe0bd7811dee2";
let city = 'Tartu'

app.get('/', function(req, res){
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	then((response) =>{
		return response.json()
	})
	then((data) =>{
		let description = data.weather[0].description
		let city = data.name
		let temp = Math.round(parseFloat(data.main.temp)-273.15)
		console.log(description)
		console.log(city)
		console.log(temp)
	})
})

app.listen(3000)