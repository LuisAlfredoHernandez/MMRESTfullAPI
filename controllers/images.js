const { response } = require("express")


const getImages = (req, res = response) => {

    res.status(200).json({
        msg:'Get images'
    })

}

const saveImage = (req, res = response) => {
    res.status(201).json({
        msg:'save image'
    })

}

const deleteImage = (req, res = response) => {

    res.status(204).json({
        msg:'delete image'
    })

}


module.exports = {
    getImages,
    deleteImage,
    saveImage
}