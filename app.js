//=====================Require=======================
const express = require('express');
const app = express();
const path = require('path');
const methodOverRide = require('method-override');
const res = require('express/lib/response');

//==================View Engine======================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//==================Index Route======================
app.get('/', (req, res) => {
	res.send('Hello, from Cloverleaf');
});

//==================Port=============================
app.listen(3000, () => {
	console.log('Serving on the port 3000...');
});
