const express = require('express');
const app = express();
const path = require('path');   // path module is provided by NodeJS

// Templating Engines are used to insert values in HTML from server side.
// If Front End is independent, then we can directly make an API call and render it directly.
// Below functions is used for setting views and view engine to help identify express that a templating engine is being used.
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "jade");

// __dirname is a global variable provided by node that gives the current directory path
// console.log(__dirname); 

// Headers are important in Web Applications. Headers are of 2 types: Request Header and Response Header. It tells the browser or server on how to deal things. 
app.get('/', (req,res) => {
    // sendFile needs an absolute path to work on.
    // res.sendFile('./public/Hello.txt', 'test.txt');
    // Join Function is similar to string concatentation.
    // Content-type in response header is automatically set by sendFile.
    // If the content sent by sendFile can be rendered by browser directly then it will be rendered.
    // res.sendFile(path.join(__dirname, "./public/Hello.txt"), 'test.txt');
    // res.sendFile(path.join(__dirname, "./public/test.json"));

    // res.download is used for downloading for the user.
    // res.download(path.join(__dirname, "./public/test.json"), 'Hello.json');

    // res.render('index', { title: "Express"});

    res
    .status(201)
    .cookie("token", "test", {
        expires: new Date(Date.now() + 8 * 3600000)
    })
    .cookie("hello", "hello")
    .redirect(301, "/admin");
})

app.listen(5000);