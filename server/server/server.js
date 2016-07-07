var express 	= require('express');
var http 		= require('http');
var path 		= require('path');

var reload 		= require('reload');
var watch		= require('watch');

var app 		= express();

var dir_public  = path.join(__dirname, '../public');
console.log( '태스트' );
console.log( __dirname );

app.set('port', process.env.PORT || 3000);
app.use(express.static(dir_public));

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var server = http.createServer(app);

reloadServer = reload(server, app);
watch.watchTree(dir_public, function (f, curr, prev) {
    // Fire server-side reload event 
	console.log( "Change dir_public" );
    reloadServer.reload();
});

server.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

