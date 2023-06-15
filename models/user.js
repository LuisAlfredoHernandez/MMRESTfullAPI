const { model, Schema } = require("mongoose");

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido!'],
        unique:true
    }
})

module.exports = model('Usuario', UsuarioSchema)