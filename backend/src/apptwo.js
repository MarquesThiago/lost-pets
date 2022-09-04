require('dotenv').config({
    path:process.env.NODE_ENV == test ? '.env.test' : '.env'
})
const server = require("./serverTwo")



server.middleware()
server.routes()
server.start.listen(process.env.PORT, () => [
    console.log("runner server in" + process.env.NODE_ENV == "test" ? "test" : "dev")
] )