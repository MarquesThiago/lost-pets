const express = require('express')

class ServerRunner{

    construtor(dependencieExpress = express){
        this.#dependencie =  dependencieExpress
        this.express = this.#dependencie()
        this.middleware
        this.routes

    }

    middleware = () => {
        this.express.use(this.#dependencie.json())

    }

    routes = (path = "./Routes/router.js") => {
        this.express.use(require(path))
    }
}

module.exports = new ServerRunner().express