// Using common js modules imports here
const express = require('express');

const app = express();

// define route handler
app.get('/', (req, res) => {
    res.send({hi : 'there'});
});

app.listen(5000);
