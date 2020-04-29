const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//db conneciton
const db = require("./helper/db")();

//routes
const newAccount = require('./routes/api/newAccount');
app.use('/newAccount', newAccount);

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server started on port : ${port}`))