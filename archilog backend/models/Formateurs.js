const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const formateurSchema = new Schema({
    img: String,
    name: String, 
    age:Number,
})

module.exports = mongoose.model('Formateurs',formateurSchema)