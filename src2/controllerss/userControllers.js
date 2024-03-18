const modelo = require('../pathModels/userModels');

const userControllers = {
    getAllNotes: async (req, res) => { 
        try {
            const users = await modelo.find();
            res.json(users)
        } catch(error){
            console.error('Error al traer la DATA', error)
        }
    },

    postNotes: async (req, res) => {
        const userData = req.body
        try{
            const newUser = new modelo(userData)
            console.log(newUser)
            const savedUser = await newUser.save()
            console.log(savedUser);
            res.status(201).json(savedUser)
        }catch(error){
            console.error('Error al agregar los datos', error)
            res.status(500).json({ message: 'Error interno del servidor', error: error.message });
        }
        
    }
}

module.exports = userControllers;