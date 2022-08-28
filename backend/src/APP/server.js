const express = require('express')

const ServerApplication = (expressDependencie = express) => {


    let start = expressDependencie()
    return  {
        start: start,
        middleware: (express_ = start) => {
            express_.use(expressDependencie.json())
            return undefined
            },
        routes:(path = "./../Routes/router.js",
            express_ = start) => 
            {
                express_.use(require(path))
                return undefined
            }    
    }
}

module.exports =  ServerApplication()