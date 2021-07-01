const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')

const app = express();
app.use(cors())

const port = 8080;
const dbURL = "your mongodb_URL";

try{
    mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology: true});
}catch(err){
    console.error(err);
}

const db = mongoose.connection

db.on('error',(err) => console.error(err));
db.once('open',() => console.log('Connected to Database'));

app.use((req, res,next) => {
    console.log(`${new Date().toString()} - ${req.originalUrl}`)
    next();
})

app.use(express.json());

const logRoute = require('./routes/logs');
app.use('/logs',logRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
