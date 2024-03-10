const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require("cors");

const userRouter = require('./Src/Routes/userRouter')
const testimonialsRouter = require('./Src/Routes/testimonialsRouter')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/api/users' , userRouter)
app.use('/api/testimonials' , testimonialsRouter)

mongoose.connect('mongodb://root:sLbS6wK0gvDpeNZiY5usYGkP@crakedb:27017/crakedb?authSource=admin');
mongoose.Promise = global.Promise;



app.listen(8000)