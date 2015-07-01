var express = require('express');
var redis = require('redis');

var app = express()

console.log(process.env.REDIS_PORT_6379_TCP_ADDR + ':' + process.env.REDIS_PORT_6379_TCP_PORT);

var client = redis.createClient('6379', 'redis');

app.get('/', function(req, res, next){
	client.incr('counter', function(err, counter){
		if (err) return next(err);
		res.send({count: counter});
	});
});

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), function(){
	console.log('Listening on port ' + app.get('port'));
});