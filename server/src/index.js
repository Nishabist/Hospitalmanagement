const express = require("express")
const app = express()
const cors = require('cors')
const port=4001;
const connection = require('./db/connection')
const patientRouter = require('./routes/patient')
connection()
app.use(cors())
app.use(patientRouter)

app.get('/user', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})