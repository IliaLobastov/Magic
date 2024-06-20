const express = require('express');
const morgan = require('morgan');
const cardRouter = require('./routes/card.router');
const authRouter = require('./routes/auth.router');
const tokenRouter = require('./routes/token.router');
const cookieParser = require('cookie-parser');
const basketRouter = require('./routes/basket.router');

const app = express();

app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/cards', cardRouter);
app.use('/api/auth', authRouter);
// app.use('/api/routs', tokenRouter);
app.use('/api/basket', basketRouter);
app.use('/api/tokens', tokenRouter);


module.exports = app;