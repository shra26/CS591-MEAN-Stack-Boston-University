let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send("Hello Prof! Is this awesome or what?");
});

router.get('/get', (req, res, next) => {
  res.render('ps3',{ source: 'Bazinga!' });
});
router.post('/post',(req, res, next)=> {
  res.render('ps3',{text :req.body.name, length: req.body.name.length})
})
module.exports = router;