const { response } = require("express")
const { User } = require("../models")


const saveUser = async (req, res = response) => {
    const name = req.body.nombre
    const data = { nombre: name }
    const usuario = new User(data)
    await usuario.save();
    res.status(201).json(usuario)
}

const deleteUser = async (req, res = response) => {
    const { nombre } = req.params
    const usuario = await User.findOne({ nombre })
    if (!usuario) {
        return res.status(404).json({
            msg: 'No se encontro usuario!'
        })
    }
    const id = usuario._id;
    const usuarioEliminado = await User.findByIdAndDelete(id)
    res.status(200).json({
        msg: 'Usuario Eliminado!',
        usuarioEliminado
    })
}


module.exports = {
    saveUser,
    deleteUser
}