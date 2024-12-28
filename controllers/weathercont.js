const configuration = require('../config.js');
const axios = require('axios');
const getWeather = async (req,res)=>{
    const cityname= req.body.cityname;
    const response = await axios.get(`${configuration.baseUrl}?q=${cityname}&appid=${configuration.apiKey}&units=metric`);
    const filteredData = {
        name: response.data.name,
        country: response.data.sys.country,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description
    };
    res.render('result',{
         filterdata : filteredData});
};
module.exports ={getWeather};