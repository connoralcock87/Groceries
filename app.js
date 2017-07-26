const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express');
const app = express();

app.use('/grocery', express.static('../grocery'));

app.get('/grocery', function (request, response) {
  response.json(groceries);
});

app.get('/grocery:id')

app.listen(process.env.PORT || 3000);
