let express = require('express');
let router = express.Router();
let request = require('request');
let con = require('../config/constants');
/* GET users listing. */

const resolver = new Promise((resolve, reject) => {
	request(con.url1 + con.url2, (error, response, body) => {
		if (error) reject(new Error(error));
		else resolve(JSON.parse(body));
	});
});
router.get('/', (req, res, next) => {
	resolver.then(value => {
		res.send({ weather: value.results, req: req.headers.data});
	});
});

module.exports = router;
