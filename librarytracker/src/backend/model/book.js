const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        
            type: String, 
            required: true },
    author:{

            type: String, 
            required: true },
    year:{

            type: String },
    genre:{

            type: String },
    description:{

            type: String },
    createdAt:{

            type: Date, 
            default: Date.now }
});

const bookModel = mongoose.model('Book', bookSchema);
module.exports = bookModel;
