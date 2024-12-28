// routers/weatherRoutes.js
const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weathercont.js');

router.get('/', (req,res)=>{
    res.render('home');
});
router.post('/weather', weatherController.getWeather);

module.exports = router;
