let express = require('express');
let router = express.Router();
let request = require('request');
let con = require('../config/constants');
const db = require('../mongo/mongo');
/* GET users listing. */

// let resolver = new Promise((resolve, reject) => {
// 	// request(con.url1 + con.url2, (error, response, body) => {
// 	request(con.hitUrl21 + con.hitUrl22, (error, response, body) => {
// 		if (error) reject(new Error(error));
// 		else resolve(JSON.parse(body));
// 	});
// });
db.connect((err, client) => {
	if (err) {
		console.log(`ERR: ${err}`);
	} else {
		console.log(`Connected`);
	}
});
let fromDB = false;
router.get('/', (req, res, next) => {
	let mongo = db.getDB();
	mongo.collection('WeatherDB').findOne({ city: req.headers.data || 'Boston' }, (err, result) => {
		if (err) {
			return next(err);
		} else {
			if (result == null) {
				let resolver = new Promise((resolve, reject) => {
					// request(con.url1 + con.url2, (error, response, body) => {
					request(con.hitUrl21 + con.hitUrl22 + req.headers.data, (error, response, body) => {
						if (error) reject(new Error(error));
						else resolve(JSON.parse(body));
					});
				});
				resolver
					.then(val => {
						return new Promise((resolve, reject) => {
							request(
								con.url1 +
									'json?lat=' +
									val[0].latt_long.split(',')[0] +
									'&lng=' +
									val[0].latt_long.split(',')[1] +
									'&date=today',
								(error, response, body) => {
									if (error) reject(new Error(error));
									else resolve(JSON.parse(body));
								}
							);
						});
					})
					.then(val => {
						fromDB = false;
						mongo.collection('WeatherDB').insertOne({ city: req.headers.data, obj: val.results });
						res.send({ weather: val.results, fromDB: fromDB });
					});
			} else {
				fromDB = true;
				console.log(`Result: ${result.obj}`);
				res.send({
					weather: result.obj,
					fromDB: fromDB /*, req: result req.headers.data || 'Boston'*/
				});
			}
		}
	});
});

module.exports = router;
