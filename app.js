const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");
const { engine } = require('express-handlebars');

app.use(morgan('dev'));
app.use(express.json());

app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

const router = require('./routes');

app.use('/api', router);
app.use('/', (req, res) => {
  res.render('Hello World');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
