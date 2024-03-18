const mongoose = require('mongoose')

const SchemaUser = new mongoose.Schema({
    nombre: String,
    grupo: String,
    Nota1: String
})

const modelo = mongoose.model('notas', SchemaUser)

module.exports = modelo