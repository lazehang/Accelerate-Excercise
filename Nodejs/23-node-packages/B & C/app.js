const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res)=> {
	res.sendFile(path.join(__dirname,'index.html'));
	console.log('Flower Shop');
});

app.post('/post', (req, res)=> {
	res.send(req.body);
	console.log(req.body);
});

app.listen(8000);