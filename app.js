const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', upload.array(), (req, res, next) => { console.log(req.body); res.json(req.body); });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
