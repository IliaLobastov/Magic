const express = require('express');
const morgan = require('morgan');
// const postRouter = require('./router/postRouter');


const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api/posts', postRouter);


module.exports = app;