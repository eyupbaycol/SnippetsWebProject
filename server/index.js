const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//db conneciton
const db = require("./helper/db")();

//config
const config = require("./config");
app.set("api_secret_key", config.api_secret_key);

//middleware
const verifyToken = require("./Middleware/verifyToken");
//routes
const User = require('./routes/api/User');
const homePage = require("./routes/api/Home");
app.use('/', User);
// app.use('/Home',verifyToken);
app.use("/Home", verifyToken, homePage);
const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server started on port : ${port}`))