const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./configs/databases')
const router = require('./routess/routes.js');

const app = express();
const port = 3000

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/', router)
app.listen(port, () => console.log("listening on port" + port))