const { dbConnection } = require("../database/config.database");
const express = require('express');
const cors = require = ('cors');

class Server {
    constructor() {
        this.app = express()
        this.port = Process.env.PORT || 8080;
        this.paths = {
            images:'api/images',
        }
        this.conectarDB();
        this.middleware();
        this.listen();
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
        this.app.use(this.path.images, require('../routes/images'))
    }

    listen() {
        this.app.listen(this.port, ()=>{
            console.log(this.port)
        })
    }
}

module.exports = Server;