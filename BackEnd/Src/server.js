const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require("cors");

const userRouter = require('./Routes/userRouter')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/api/users' , userRouter)


mongoose.connect('mongodb://127.0.0.1:27017/Crake');
mongoose.Promise = global.Promise;



app.listen(8000)