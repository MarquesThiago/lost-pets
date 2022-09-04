const express = require('express')

const routes =  express.Router()

routes.get("/", (_req , res) => {
    return res.status(200).send("function")
})

routes.post("/cadastro", (req, res)=> {
    return res.status(200).send(true)
})

module.exports = routes
