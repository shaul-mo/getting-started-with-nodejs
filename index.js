require('./models/db');

const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser');
const studentController = require('./controllers/studentController');

var app = express();

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.get('/', (req, res) => {
  res.send(`<h2>Welcome to the Student Database!</h2>
	    <h3>Click here to get access to the <b> <a href="/student/list">Database</a></b></h3>`)
});

// default environment settings
const hbs = exphbs.create({
        defaultLayout: 'MainLayout', 
	extname: '.hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.listen(3001, () => {
  console.log('server started at port 3001')
})

app.use('/student', studentController);
