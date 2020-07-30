//jshint esversion:6

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('Server listening into port ' + port);
});
