const { response } = require("express")


const getResource = (req, res = response) => {

   return res.status(200).json({
        msg:'Get images'
    })

}

const saveResource = (req, res = response) => {
    return res.status(201).json({
        msg:'save image'
    })

}

const deleteResource = (req, res = response) => {

    return res.status(204).json({
        msg:'delete image'
    })

}


module.exports = {
    getResource,
    deleteResource,
    saveResource
}