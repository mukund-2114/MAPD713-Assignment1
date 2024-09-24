const express = require('express');
const app = express();
const port = 3000

let getRequest = 0
let postRequest = 0

const products = [
    
]

app.get('/products', (req, res) => {
    getRequest++
    console.log("products GET: received request")
    console.log("products GET: sending response")

    console.log(`Processed Request Count--> GET:${getRequest}, POST: ${postRequest}`)
    res.json({"message":"Success"})
    
})

app.listen(port,()=>{
    console.log(`Server listening at: http://localhost:${port} `)
})