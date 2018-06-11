const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const expressValidator = require('express-validator');
const compression = require('compression');

const app = express();

const { getPollPercent, encodeURI, FBShare } = require('./helpers/hbs');
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI).then(() => console.log('Connected to mongoDB')).catch(err => console.log(err));

const indexRoute = require('./routes/index');
const pollRoute = require('./routes/poll');
const voteRoute = require('./routes/vote');

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 5000)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({ 
  defaultLayout: 'main',
  helpers: {
    getPollPercent: getPollPercent,
    encodeURI: encodeURI,
    FBShare: FBShare
  } 
}));
app.set('view engine', 'handlebars');
app.use(expressValidator());
app.use(cookieParser());
app.use(session({
  secret: 'pollsannclone',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());
app.use(morgan('dev'));
app.disable('x-powered-by');

app.use('/', indexRoute);
app.use('/poll', pollRoute);
app.use('/vote', voteRoute);

app.listen(app.get('port'), () => console.log('Server running.'));