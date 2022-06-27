const express = require("express");
const app = express();
const PORT = 8080

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,re) => {
	res.send("Hello world");
}

app.get("/login/oauth2/code/google", (req, res) => {
	res.json(decodeURIComponent(req.query.code));
});

app.listen(PORT, () => {
	console.log("Server is running on port 8080");
});
