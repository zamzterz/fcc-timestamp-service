"use strict";

let express = require('express');
let app = express();

app.get('*', (req, res) => {
  let data = {'unix': null, 'natural': null};
  let param = decodeURIComponent(req.path.substring(1));
  let date = null;

  if (isNaN(param)) {
    date = new Date(param);
  } else {
    date = new Date(+param * 1000);
  }

  if (param && date instanceof Date && isFinite(date)) {
    data = {'unix': date.getTime()/1000, 'natural': date.toDateString()};
  }
  res.json(data);
});

app.listen(8080);

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});