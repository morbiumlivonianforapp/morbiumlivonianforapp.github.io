const fs = require('fs');
const express = require('express')
const process = require('process');
const {exec} = require('child_process');
const bodyParser = require('body-parser');
var zipper = require("zip-local");

const app = express()
 
app.use(express.static('.'))
app.use(bodyParser.text());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/savetofile', function (req, res) {
  
  //var webString = "import 'package:flutter_web/material.dart';"
  var newContent = req.body;

  // working dir is already sample-flutter-project
  var path = "lib/main.dart";
  fs.writeFile(path, newContent, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Saved file.");
  });

  res.send(req.body);
})


process.chdir("sample-flutter-project");

//startWebDevServe()

app.listen(3000)

function startWebDevServe() {
    exec("webdev serve", (err, stdout, stderr) => {
        if (err) {
                console.log(err);
        }
        console.log(stdout);
    });
    console.log("Starting webdev serve");
}

