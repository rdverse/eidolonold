// Using common js modules imports here
const express = require('express');

const app = express();

// define route handler
app.get('/', (req, res) => {
    res.send({Hi : 'TiiiiiiingYuuuuuuuuun'});
});

// Get the environment variable port from heroku
// dev - 5000 , prod - PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);
