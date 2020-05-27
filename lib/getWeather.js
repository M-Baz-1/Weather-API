require('dotenv').config();
const fetch = require('node-fetch')

const getWeather = async(city, country) => {
     
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${process.env.APPID}`;


    let data = await fetch(url);


    return await data.json()
}


module.exports = getWeather;