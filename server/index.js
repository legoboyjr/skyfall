const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const path = require('path');
const app = express();
dotenv.config({ path: __dirname + '/.env'});
const port = process.env.PORT || 4000;
const apiKey = process.env.API_KEY;

const helmet = require('helmet');

app.use(helmet());
const staticPath = path.resolve(__dirname, '../client/build');
app.use(express.static(staticPath));

app.get('/forecast/coords/:lat,:lon', (req, res) => {
    const { lat, lon } = req.params;
    const url = `https://api.darksky.net/forecast/${apiKey}/${lat},${lon}`;
    axios.get(url)
    .then(weatherResponce => {
        const weather = weatherResponce.data;
        res.status(200);
        res.json({
            weather:weather
        })
    })
    .catch(err => {
        res.status(err.status || 500);
        res.send(err.message || "uh oh");
    })
});

app.listen(port, () => {
    console.log(`now listening on port: ${port}`);
});