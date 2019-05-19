const express = require('express');
const chalk = require('chalk');
const debug = require('debug') ('app');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bulma/css')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'));
})


app.listen(2019, function (){
debug (`listening on port ${chalk.green(3000)}`);
});
