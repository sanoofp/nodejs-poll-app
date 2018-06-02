const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

const keys = require('./config/keys');
mongoose.connect(keys.mongoURI).then(() => console.log('Connected to mongoDB')).catch(err => console.log(err));

const indexRoute = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(morgan('dev'));

app.use('/', indexRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running.'));