console.log("express app.... start server.js")
const express = require("express")
const app = express() // initialize an express application
const LOCAL_HOST="http://localhost"
const BASE_URL="http://localhost"
const defaultPort = 3000
const port = process.env.PORT || defaultPort
console.log("express app.... app const ","\n port -> ",port)

//standard function to handle a route in express
// function handleIdx (req,res){
//     console.log("called handleIdx w/ req",req)
//     //req = request
//     //res = response
//     console.log("sending response res",res)
//     res.send("Hellow World")
// }

// handleidx as arrow function
app.get("/",(req,res)=>{
    console.log("req/res as arrow func...req",req)
    const resp = "Hello World from express app"
    console.log("resp -> ",resp,typeof(resp))
    res.send(resp)
}) //index route

app.get("/express-app",(req,res)=>{
    const thisPath = req.path
    const thisRoute = req.route
    const resp = `route/ ${thisRoute} w/ path ${thisPath} from express app`
    console.log("resp -> ",resp,"type of ", typeof(resp))
    res.send(resp)
}) //index route

//which port for the app to pay attention to
function whatsHapp(port=defaultPort){
    console.log("called whatsHapp on port... ",port)
}

//app.listen(port,whatsHapp(BASE_URL))
app.listen(port, ()=>{
    console.log(`listening on ${LOCAL_HOST}:${port}`)
})