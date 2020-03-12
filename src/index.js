const express = require('express');
const expbhs = require('express-handlebars');
const path = require('path');

const app = express();

// Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expbhs({
    defaultLayout : 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname : '.hbs'
}));

app.set('view engine', '.hbs');

// Middelware
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// Routes
app.use(require('./routes/index'))

// Static
app.use(express.static(path.join(__dirname, 'public')))

// Start server
app.listen(3000, () => {
    console.log('Server listen', 3000);
});