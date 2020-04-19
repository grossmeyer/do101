var express = require('express');
app = express();

app.get('/', function (req, res) {
    res.send('Hello DO101!\n')
});

app.get('/apiv1', function (req, res) {
    res.send('Hi, this is a test API for version 1!\n')
});

app.listen(8080, function () {
    console.log('Example web server listening on port 8080...\n');
});