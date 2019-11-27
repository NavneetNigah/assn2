const aboutTitle= "";

const movieList= function(req, res) {
  res.render('movieList', { movies: movieArray });
};

const about= function(req, res) {
  res.render('about', { abouts: aboutTitle });
};

const display= function(req, res) {
  res.render('display', { display: display });
};

var movieArray= [{
    name: 'Avengers: Endgame', 
    genre: 'Fantasy/Sci-fi'},
       {
    name: 'Joker(2019)', 
    genre: 'Drama/Thriller'},
       {
    name: 'Toy Story 4', 
    genre: 'Fantasy/Adventure'
       }];

module.exports={
    movieList,
    about,
    display
};