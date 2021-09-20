const express = require('express');
const app = express();


// Query Params should always be send using encodeURIComponent
// send is like a return function, it will return from the function and lines written after send will not execute
app.get('/', (req, res) => {
    res.status(200);
    res.json(req.query);
});

app.post('/', (req, res) => {
    res.json({ text: req.body});
});

// This route path will match acd and abcd
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd');
});

// This route path will match abcd, abbcd, abbbbcd
app.get('/ab+cd', function (req, res) {
    res.send('ab+cd');
});

// This route path will match abcd, abxcd, abRANDOMcd
app.get('/ab*cd', function (req, res) {
    res.send('ab*cd');
});

// This route path will match abcde,abe
app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)e');
});

// This route path will match anthing with an "a"
app.get('/a/', function (req, res) {
    res.send('/a/');
});

// This route path will match butterfly and dragonfly
app.get('/.*fly$/', function (req, res) {
    res.send('/.*fly$/');
});

// For dynamic data
app.get('/user/:userId/books/:bookId', (req, res) => {
	res.send(req.params);	// req.params contains the dynamic data that we sent.
});

app.listen(5000);
