'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var apiEndpoints = require('./app/api-endpoints/api.js');
var app = express();
require('dotenv').load();

routes(app);
apiEndpoints(app);

app.use('/public', express.static(process.cwd() + '/public'));

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});