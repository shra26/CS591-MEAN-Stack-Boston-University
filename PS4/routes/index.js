let express = require('express');
let router = express.Router();
const db = require('../mongo/mongo');

db.connect((err, client) => {
	if (err) {
		console.log(`ERR: ${err}`);
	} else {
		console.log(`Connected`);
	}
});
router.post('/', (req, res, next) => {
	let weather = req.body.name;
	let weatherObj = {
		weather
	};
	let mongo = db.getDB();
	mongo.collection('WeatherDB').insertOne(req.body, (err, r) => {
		res.send('success');
	});
});
router.get('/:weather', (req, res, next) => {
	let mongo = db.getDB();
	mongo
		.collection('WeatherDB')
		.find({ weather: req.params.weather })
		.toArray((err, docs) => {
			console.log(docs);
		});
});
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

module.exports = router;
