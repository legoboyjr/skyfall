const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({ path: __dirname + '/.env'});
const port = process.env.PORT || 4000;
const apiKey = process.env.API_KEY;

app.get('/', (request, response) => {
    response.status(200);
    response.send('yayyyyyyyyyyy it works');
});

app.get('/forecast/coords/:lat,:lon', (req, res) => {
    const { lat, lon } = req.params;
    res.status(200);
    res.json({
        lat: lat,
        lon: lon
    })
});

app.listen(port, () => {
    console.log(`now listening on port: ${port}`);
});