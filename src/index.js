const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');
const morgan = require('morgan');
const colors = require('colors');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(morgan('dev'));

//Routes
app.use(routes);

//Statid files

//Listening server
app.listen(app.get('port'), () => {
    console.log('Server\'s working on port'.cyan, app.get('port'));
});