const {Router} = require('express');
const router = Router ();

const getWeather = require('../lib/getWeather');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', async(req, res) => {

    let city = req.body.city;
    let country = req.body.country;
    
    let data = await getWeather(city, country);

    console.log(data);


    if (data.cod !=="404") {
        let description = data.weather[0].description;
        let temp = data.main.temp;
        let wind = data.wind.speed

        res.render('index', {data:{description, temp, wind}});
    }else {

        let message = `Error, ${city}, does not exist`
        res.render('index', {data:{message}})
    }
});

module.exports = router;
