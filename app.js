const express = require('express');
const chalk = require('chalk');
const debug = require('debug') ('app');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public')));


app.listen(2019, function (){
debug (`listening on port ${chalk.green(3000)}`);
});
