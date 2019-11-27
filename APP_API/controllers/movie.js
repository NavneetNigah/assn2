const getMovies = function (req, res) {
    res 
    .status(200)
    .json({"status" : "Movies4U"})
    };
    
    const createMovie = function (req, res) {
    res 
    .status(200)
    .json({"status" : "Movies4U - no error"})
    };
    
    const getSingleMovie = function (req, res) {
    res 
    .status(200)
    .json({"status" : "Movies4U - no error"})
    };
    
    const updateMovie = function (req, res) {
    res 
    .status(200)
    .json({"status" : "Movies4U - no error"})
    };
    
    const deleteMovie = function (req, res) {
    res 
    .status(200)
    .json({"status" : "Movies4U - no error"})
    };
    
    module.exports = {
        getMovies, createMovie, getSingleMovie, updateMovie, deleteMovie
    };