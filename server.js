var path = require('path');
var express = require('express');
var app = express();
const bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

app.on('error', function (err) {
  console.log('server error', err);
});
app.listen(PORT, function () {
  console.log('App server is listening on port', PORT);
});

app.get('/api/test',(req,res) => {
  console.log("message");
});

app.post('/api/send',(req,res) =>{

});
module.exports = app;