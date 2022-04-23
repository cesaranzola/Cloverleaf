//=====================Require=======================
const express = require('express');
const app = express();
const path = require('path');
const methodOverRide = require('method-override');
const res = require('express/lib/response');
const {default: mongoose} = require('mongoose');
const Campground = require('./models/campground');

//===================Mongoose========================
mongoose.connect('mongodb://localhost:27017/cloverleaf', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Database connected');
});

//==================View Engine======================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//==================Index Route======================
app.get('/', (req, res) => {
	res.render('home');
});

//===================Campground route================
app.get('/makecampground', async (req, res) => {
	const camp = new Campground({
		title: 'My Backyard',
		description: 'Free camping',
	});
	await camp.save();
	res.send(camp);
});

//==================Port=============================
app.listen(3000, () => {
	console.log('Serving on the port 3000...');
});
