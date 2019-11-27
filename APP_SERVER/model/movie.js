const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
name: {
        type: String,
        required: true,
        minlength: 5
    },
type: {
        type: String,
        required: true
    },
collection: {
    type: String,
    required: true,
    minlength: 5
},
yearofrelease: {
    type: String,
    required: true,
    minlength: 5
},
IMDb: {
    type: String,
    required: true,
    minlength: 5
}

});
mongoose.model('Movie', 'movieSchema');

