const express = require('express');
const morgan = require('morgan');
const cardRouter = require('./routes/card.router');


const app = express();

app.use(express.static("public"));
// app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/cards', cardRouter);


module.exports = app;