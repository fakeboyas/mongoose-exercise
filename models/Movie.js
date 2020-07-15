const mongoose =require('mongoose')

const MoviesSchema =  new mongoose.Schema({
 
    title:{
        type: String,
        required: true,
    },
    release_date:{
        type: String,
        required: true,
    },
    genre:{
        type: String,
        required: true,
    },
    image_url:{
        type: String,
        required: true,
    },
    rating:{
        type: String,
        required: true,
    },
    createdAt:{
        type:Date,
        required:true,
        default: new Date().toLocaleString()
    },
    updatedAt:{
        type:Date,
        required:true,
        default: new Date().toLocaleString()
    }
})

const Movie = mongoose.model('movies', MoviesSchema)
module.exports = Movie;