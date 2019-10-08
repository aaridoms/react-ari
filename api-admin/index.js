var express = require('express')
var app = express()
var port = process.env.PORT || 8001;
var apiRoutes = require("./api-routes")

app.get('/', (req, res) => res.send('Hello world'));

app.listen(port, function() {
    console.log("Running API-ADMIN on port " + port);
});

app.use('/api', apiRoutes)