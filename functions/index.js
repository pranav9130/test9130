const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.set('port', (process.env.port || 5000));

app.get('/', function(req, res){
	res.send('use /webhook end point');
});

app.get('/webhook', function(req, res){
	res.send('use post method please !!');
});

app.post('/webhook', function(req, res){
	console.log(req.body);

	//validate the request
	if( !req.body || !req.body.result || !req.body.result.parameters ){
		return res.status(400).send('Bad request');
	}

	let result = req.body.result;
	let parameters = result.parameters;

	console.log('results', result);

	res.status(200).json({
		source : 'webhook',
		speech : 'this is \n webhookReply',
		displayText :'this is \n webhookReply'
	})
})

app.listen(app.get('port'), function(){
	console.log('started server @ ' + app.get('port')	);
})