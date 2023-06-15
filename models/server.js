const { dbConnection } = require("../database/config.database");
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");


class Server {
    constructor() {
        this.app = express()
        this.app.use(cors({
            origin: "*",
            methods: ["GET","POST","DELETE","PUT"],
        }));
        this.port = process.env.PORT || 8080;
        this.paths = {
            resource: '/api/resource',
            user: '/api/user',
        }
        this.middleware();
        this.conectarDB();
        this.routes();
    }

    async conectarDB() {
        dbConnection()
    }

    middleware() {
  
        this.app.use(express.static('public'))
        this.app.use(express.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(bodyParser.json())
    }

    routes() {
        this.app.use(this.paths.resource, require('../routes/resource'))
        this.app.use(this.paths.user, require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(this.port)
        })
    }
}

module.exports = Server;