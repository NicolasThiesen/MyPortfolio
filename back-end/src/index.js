const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/portfolio", {useNewUrlParser: true, useUnifiedTopology: true})
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server Running on port 3333"));