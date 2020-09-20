const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/fbi'


//init node on port
const app = express()
const port = process.env.PORT || 3000;


//config parser and cors
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res)=>{
  res.send('It´s Workign')
});
//check connection db
mongoose.connect(url, {useNewUrlParser: true})
const dbConnection = mongoose.connection

dbConnection.on('open', ()=> {
  console.log('DB CONNECTED')
})

//check on what port is working
app.listen(port, ()=> {
  console.log(`working on port ${port}`)
})