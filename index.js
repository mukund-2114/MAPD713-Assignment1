const express = require('express');
const app = express();
const port = 3000

let getRequest = 0
let postRequest = 0

let dataStore = {
    products:[]
}

app.use(express.json())
app.get('/products', (req, res) => {
    getRequest++
    console.log("products GET: received request")
    console.log(`Processed Request Count--> GET:${getRequest}, POST: ${postRequest}`)
    console.log("products GET: sending response")
    res.json(dataStore)
    
})

app.post('/products', (req, res) => {
    postRequest++
    console.log("products POST: received request")
    console.log(`Processed Request Count--> GET:${getRequest}, POST: ${postRequest}`)
    const bodyData = req.body;
    dataStore.products.push(bodyData)
    // console.log(bodyData)
    console.log("products POST: sending response")
    res.json({message:'Product added successfully',bodyData})
})

app.delete('/products', (req, res) => {
    dataStore.products = []
    res.json({message:"All products deleted"})
})

app.listen(port,()=>{
    console.log(`Server listening at: http://localhost:${port} `)
})