const express = require("express");
const app = express();

app.get("/", (req, res) => {
	return res.send({ message: "Hello World One" });
});

module.exports = app;