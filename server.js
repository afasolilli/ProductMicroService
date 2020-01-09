var express = require('express')
var app = express();
var port = process.env.PORT || 3000; // process object is used to reference system properties
//if you want to define a port based on the machine running the application you can use the PORT environment variable - default is 3000 otherwise
var routes = require('./api/routes');
routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});