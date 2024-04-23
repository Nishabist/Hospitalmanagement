const express = require("express")
const app = express()
const port=4001;
const connection = require('../db/connection')
connection()

app.get('/user', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})