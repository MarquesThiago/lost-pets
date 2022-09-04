require('dotenv').config({
    path:process.env.NODE_ENV == test ? '.env.test' : '.env'
})
const server = require("./server")



server.middleware()
server.routes()
server.listen(process.env.PORT, () => [
    console.log("runner server in" + NODE_ENV == "test" ? "test" : "dev")
] )