const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/login/oauth2/code/google", (req, res) => {
	console.log(decodeURIComponent(req.query.code));
	res.send("<h1>Login Successful</h1>");
});

app.listen(8080, () => {
	console.log("Server is running on port 8080");
});
