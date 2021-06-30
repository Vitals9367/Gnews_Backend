const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = 5000;
const dbURL = "mongodb+srv://ExpressAPI:ExpressAPI@cluster0.9l6zr.mongodb.net/logs?retryWrites=true&w=majority";

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