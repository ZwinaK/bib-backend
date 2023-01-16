
var express = require('express');
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json())

const musiquesRoutes = require('./routes/musiques-routes')
const filmsRoutes = require('./routes/films-routes')
const livresRoutes = require('./routes/livres-routes')


app.use('/api/musiques', musiquesRoutes);
app.use('/api/films', filmsRoutes);
app.use('/api/livres', livresRoutes);


app.listen(5000);

