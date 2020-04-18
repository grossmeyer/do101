var express = require('express');
app = express();

app.get('/', function (req, res) {
    res.send('Hello DO101!\n')
});

app.get('/api', function (req, res) {
    res.send('Hi, this is a test API!\n')
});

app.listen(8080, function () {
    console.log('Example web server listening on port 8080...\n');
});