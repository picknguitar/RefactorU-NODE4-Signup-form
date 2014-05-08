var express = require('express');
var app = express();

// app.set('view engine', 'jade');
// app.set('views', __dirname + '/views')

app.get('/', function(req, res) {
	res.header('Content-type', 'text/html');
	res.send('<form method="post" action="/formsubmit"><input name="email" placeholder="email" type="email"><input type="submit"></form>');
});

app.post('/formsubmit', function(req, res) {
	res.redirect('/success');	
});

app.get('/success', function(req, res) {
	res.send('Successful Submission!')
});

var server = app.listen(4588, function() {
	console.log('Express server listening on port ' + server.address().port);
});
