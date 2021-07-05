const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db');

const app = express();
const port = 8866;

// handle static files (css, images, ...)
app.use(express.static(path.join(__dirname, 'public')));

// connect db
db.connect();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

// http logger
app.use(morgan('combined'));

// set template engine
const hbs = handlebars.create({
  extname: '.hbs',
  partialsDir: [path.join(__dirname, 'resources', 'views', 'partials')],
});

app.engine('hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// routes
route(app);

app.listen(port, () => {
  console.log(`listen on port http://localhost:${port}`);
});
