const app = require("../index")
const connect = require("./db")

app.listen(2022,async function(){
    await connect()
   console.log("connected to the port number 2022")
})