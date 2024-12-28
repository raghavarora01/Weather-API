const express = require('express');
const app = express();
const path = require('path');
const weatherroutes = require('./routers/weatherRoutes');
const port = 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', weatherroutes);
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));
app.listen(port,()=>{
    console.log('server started');
})