var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main.js');
const ctrlMovie = require('../controllers/movie.js');
/* GET home page. */
const index = (req, res) => {
res.render('index', { title: 'Express' });
};


//router.get('/list', ctrlFood.foodlist);
//router.get('/favourite', ctrlFood.favouriteFood);

router.get('/', ctrlMain.index);
router.get('/about', ctrlMovie.about);
router.get('/list', ctrlMovie.movieList);
router.get('/display', ctrlMovie.display);

module.exports = router;
