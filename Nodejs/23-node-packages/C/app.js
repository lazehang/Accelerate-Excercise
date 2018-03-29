
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/sum', function(req, res) {
    const array = req.body;
    res.json({"sum":array.reduce((acc,num)=>acc+num)});
});

app.listen(8000);