const { dbConnection } = require("../database/config.database");
const express = require('express');
const cors = require('cors');

class Server {   
     constructor() {
        this.app = express()
        this.port = process.env.PORT || 7070;
        this.paths = {
            resource:'/api/resource',
        }
        this.conectarDB();
        this.middleware();
        this.routes();
    }

    async conectarDB(){
        dbConnection()
    }

    middleware() {
        this.app.use(cors())
        this.app.use(express.static('public'))
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.paths.resource, require('../routes/resource'))
    }

    listen() {
        this.app.listen(this.port, ()=>{
            console.log(this.port)
        })
    }
}

module.exports = Server;