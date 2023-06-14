const { model, Schema } = require("mongoose");

const ResourceSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido!'],
    },
    descripcion: {
        type: String,
        required: [true, 'Agregar la descripcion es requerido!'],
    },
    tipo: {
        type: String,
        required: [true, 'Agregar el tipo de recurso es requerido!'],
    },
    img: {
        data: Buffer,
        contentType: String,
        required: [true, 'Agregar la imagen es requerido!'],
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    }
})

module.exports = model('Resource', ResourceSchema)
