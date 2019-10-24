const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//mock data
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
  let array = descendingOrder(postDatabase);
  let length = array.length;
  let templateVars = {posts : array, length: length};
  res.render("index", templateVars)
})

app.post("/posts", (req, res) => {
  
  let a = req.body.title.length;
  let b = req.body.description.length;
  if( validateEmail(req.body.email) && (0 < a && a < 255) && ( b === 0 || (b > 3 && b < 1000))){
    postDatabase[req.body.email] = {title: req.body.title, description: req.body.description};
    res.redirect("/posts");
}
  else {
     res.send("something is wrong");
   }
})


// function

let descendingOrder = function (obj){
  let array = Object.keys(obj).map(function(key){
      return [key, obj[key]]
  })
  return b = array.reverse();
};

let validateEmail = function(email){
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
};






