// Middlewares

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Query Params should always be send using encodeURIComponent
// send is like a return function, it will return from the function and lines written after send will not execute
// We can use many functions in Route.

// Middleware are functions that is executed first before actual function just to check everything is ok for next function or not.
// app.get('/', (req, res, next) => {
//     console.log("In first");
//     next(); // next is used to redirect to next function. Also next is not a return function. If something is written after next it will be executed.
// }, (req, res) => {
//     res.status(200);
//     res.json(req.query);
// });
 
// Example of middleware is, Suppose we want to access a url to only admin, then we ca define the route as follows
// https://localhost:5000/?admin=true

const checkAdmin = (req,res,next) => {
	if(req.query.admin === 'true') {
		next();
	} else {
		res.status(400).send("Should be Admin");
	}
};

const sendRes = (req,res) => {
	res.status(200);
	res.json(req.query);
};

// The middleware that is passed in use will run before every API.
// Also sequence matters of app.use function. If you write this at the end of all APIs then it will not get executed.
// body-parser is used un middleware so that it can handle all POST requests.
app.use(bodyParser.urlencoded({ extended: true}));  // For accepting form data
app.use(bodyParser.json()); // For accepting JSON data
// app.use(express.urlencoded({extended: true}));
// app.use(express.json({ extended: true}));


// app.use(checkAdmin);     

// Middlewares are mostly used in Permission System, Authorization, User looged in or not 
// HTTP Status codes are used for information to be used for fetch or axios
// app.get('/', checkAdmin, sendRes);
app.get('/', sendRes);

// For performance sake, browsers save GET queries into a local cache.
// Passwords are not send via GET request. Because it is cached by the browser, people can access it.
// For sending this we use POST. POST requests are not cached that's why it is more secure.
// We can send POST data generally in form-data or JSON.
// By default, POST call doesn't accept req.body. For accessing body, we need to use body-parser
// npm install --save body-parser
app.post('/', (req, res) => {
    console.log('req.body -> ', req.body);
    res.json(req.body);
})

app.listen(5000);