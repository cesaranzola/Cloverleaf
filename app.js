//=====================Require=======================
const express = require('express');
const app = express();
const path = require('path');
const methodOverRide = require('method-override');
const res = require('express/lib/response');

//==================Port=============================
app.listen(3000, () => {
	console.log('Listening on the port 3000...');
});
