const express = require('express');
const app = express();
const port = 3000;
const route = require("./routes")
const bodyParser = require('body-parser');
const db = require("./config/db");
db.connect();
app.use((req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
  }
  )
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
route(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})