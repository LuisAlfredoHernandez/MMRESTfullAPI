const { response } = require("express")


const saveUser = (req, res = response) => {

    res.status(201).json({

    })

}


const deleteUser = (req, res = response) => {

    res.status(201).json({

    })

}


module.exports = {
    saveUser,
    deleteUser
}