const express = require("express");
const mongoose = require('./config/database');
const router = require('./config/routes')
const cors = require('cors')
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));



const port = process.env.PORT || 3005;

app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
  res.send("Welcome To Ticket-Master API");
});


app.use('/',router)


app.listen(port, () => {
  console.log("Listening on port ", port);
});
