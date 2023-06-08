const express = require('express');
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./dbConnection");

dotenv.config();

connection();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


// api routes
app.use('/users', require('./users/users.controller'));


const port = process.env.PORT || 8800;
app.listen(port,()=>console.log(`Server is running on port ${port}`));
