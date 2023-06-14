const { response } = require("express")


const getResource = (req, res = response) => {

    res.status(200).json({
        msg:'Get images'
    })

}

const saveResource = (req, res = response) => {
    res.status(201).json({
        msg:'save image'
    })

}

const deleteResource = (req, res = response) => {

    res.status(204).json({
        msg:'delete image'
    })

}


module.exports = {
    getResource,
    deleteResource,
    saveResource
}