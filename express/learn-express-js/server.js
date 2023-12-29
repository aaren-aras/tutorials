/* Nodemon: Auto restarts Node.js app when changes are detected */

const express = require('express'); // Importing Express.js module
const app = express();

// Built-in middleware for rendering static files (img, HTML, CSS, ...)
app.use(express.static('public'));

// Built-in middleware for parsing data in req body (coming from client forms)
app.use(express.urlencoded({ extended: true })); // URL-encoded
app.use(express.json()); // JSON-encoded

/* View engines (EJS, Pug, ...): Create HTML markup w/ server-side JS code */
app.set('view engine', 'ejs');

/* Routing w/ HTTP methods/CRUD operations */
/* Also has `next` param (see `users.js`), but not really used in routes;
  Place as many middleware here as you want (left -> right) */
app.get('/', /* logger, logger, */ (req, res) => { 
  // console.log('Received!');
  // res.send('Thanks man.'); // Generally not used on its own bc too generic
  // res.download('server.js');

  /* Usually either (1) sending JSON data or (2) rendering files in responses */
  res.render('index', { text: 'World'});
  // res.status(500).json({ message: "Oops..."});
});

const userRouter = require('./routes/users');
app.use('/users', userRouter); // All `users.js` routes start with "/users" now 

// function logger(req, res, next) {
//   console.log(req.originalUrl);
//   next();
// }

app.listen(3000);