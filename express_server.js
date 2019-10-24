const express = require("express");
const app = express();
const PORT = 3000;


app.set("view engine", "ejs");

postDatabase = {
  "jiadanwang@gmail.com" : {title : "Express", description : "I'm using Express"},
  "wang@gmail.com" : {title : "Node", description : " "},
  "haha@gmail.com" : {title : "js", description : "very useful"}
}
app.listen(PORT,() => {
  console.log(`listening on port ${PORT}`)
})

app.get("/",(req,res) => {
  res.send("blog test");
});

app.get("/posts/submit", (req, res) => {
  res.render("create");
})

app.get("/posts", (req, res) => {
  let templateVars = {posts : postDatabase};
  res.render("index", templateVars)
})







