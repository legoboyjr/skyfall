const express = require('express');
const app = express();
const port = 4000;

app.get('/', (request, response) => {
    response.status(200);
    response.send('yayyyyyyyyyyy it works');
});

app.listen(port, () => {
    console.log(`now listening on port: ${port}`);
})