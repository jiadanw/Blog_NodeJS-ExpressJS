const express = require("express");
const app = express();
const PORT = 3000;


app.set("view engine", "ejs");
app.listen(PORT,() => {
  console.log(`listening on port ${PORT}`)
})

app.get("/",(req,res) => {
  res.send("blog test");
});

app.get("/posts/submit", (req, res) => {
  res.render("create");
})