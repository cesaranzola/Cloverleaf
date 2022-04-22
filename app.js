//=====================Require=======================
const express = require('express');
const app = express();
const path = require('path');
const methodOverRide = require('method-override');
const res = require('express/lib/response');

//==================Index Route======================
app.set('/', (req, res) => {
	res.send('Hello, from Cloverleaf');
});

//==================Port=============================
app.listen(3000, () => {
	console.log('Serving on the port 3000...');
});
