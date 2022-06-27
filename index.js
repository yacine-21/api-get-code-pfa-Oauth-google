const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/login/oauth2/code/google", (req, res) => {
	res.json(decodeURIComponent(req.query.code));
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
