"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

app.post("/", function (req, res) {
	let height = +req.body.height;
	let weight = +req.body.weight;

	let heightInMeter = height * 0.0254;

	const BMI = +(weight / heightInMeter ** 2).toFixed(2);

	res.send(`<h1>Calculated BMI =>> <span style="color: red;">${BMI}</span></h1>`);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
