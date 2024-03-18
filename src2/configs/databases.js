const mongoose = require('mongoose')
const connectDatabase = async () => {
    try{
        mongoose.connect('mongodb+srv://thomasrr29:aIEILsYu53ymJphr@cluster0.tjsiu0l.mongodb.net/')
        .then(() => {
            console.log('Conectamos con MongoDB')
        })
    } catch(error){
            console.error(error);
            process.exit(1)
        }
}

module.exports = connectDatabase