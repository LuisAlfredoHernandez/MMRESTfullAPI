const { response } = require("express");
const { Resource, User } = require("../models")


const saveResource = async(req, res = response) => {
    try {
        const nombre = req.body.nombre;
        const usuario = await User.findOne({ nombre })
        if (!usuario) {
            return res.status(404).json({
                msg: `No se encontro el usuario:${usuario}`
            })
        }
        const resourceToUploadObject = {
            nombreImagen: req.body.nombreImagen,
            descripcion: req.body.descripcion,
            tipo: req.body.tipo,
            usuario: usuario._id,
            src: req.body.src
        };
        const uploadObject = new Resource(resourceToUploadObject);
        await uploadObject.save();
        res.status(201).json(uploadObject)

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
}

const getResources = async (req, res = response) => {
    const { limite, desde } = req.query
    const [resources, total] = await Promise.all([
        Resource.find()
            .skip(desde)
            .limit(limite),
        Resource.countDocuments()
    ])
    res.status(200).json({
        total,
        resources
    })
}

const deleteResource = async (req, res = response) => {
    const { nombre } = req.params
    const resource = await Resource.findOne({ nombre })
    if (!resource) {
        return res.status(404).json({
            msg: 'No se encontro usuario!'
        })
    }
    const id = resource._id;
    const recursoEliminado = await Resource.findByIdAndDelete(id)
    res.status(200).json({
        msg: 'Usuario Eliminado!',
        recursoEliminado
    })

}


module.exports = {
    getResources,
    deleteResource,
    saveResource
}