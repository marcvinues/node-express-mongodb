const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/fbi'

//export routes
const fbiRoute = require('./routes/fbi_route')
const mafiaRoute = require('./routes/mafia_route')
const mafia = require('./models/mafia')
const membersRoute = require('./routes/members_route')

//init node on port
const app = express()
const port = process.env.PORT || 3000;


//config parser and cors
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.use('/fbi', fbiRoute)
app.use('/fbi', mafiaRoute)
app.use('/fbi', membersRoute)

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