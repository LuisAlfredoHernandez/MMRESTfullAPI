const { model, Schema } = require("mongoose");

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido!'],
    },
})

module.exports = model('Usuario', UsuarioSchema)
