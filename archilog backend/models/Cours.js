const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const courSchema = new Schema({
    figure: String,
    title: String,
    contenu: String,
    secteur: String,
    formateurId:String, 
})

module.exports = mongoose.model('Cours',courSchema)

