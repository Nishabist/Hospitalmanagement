const express = require("express")
const app = express()
const port=4001;


app.get('/user', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})