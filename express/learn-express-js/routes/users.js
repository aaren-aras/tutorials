/* Encapsulating all user-related routes into their own module, 
  then importing into main `app` */
const express = require('express');
const router = express.Router(); // Mini-app within `app`

/* Route detection goes from top -> bottom, like an if-else chain;
  Define custom middleware func (see below) right here to use on ALL routes */
router.use(logger); 

/* Static Routes */
router.get('/', (req, res) => {
  res.send('User List');
  // Retrieve name from query string (e.g., "/users?name=Tess")
  console.log(req.query.name); // Output: "Tess"
});

router.get('/new', (req, res) => {
  // res.send('New User Form');
  res.render('users/new', { firstName: 'Test' });
});

router.post('/', (req, res) => {
  // res.send('Create User');
  const isValid = false;
  if (isValid) {
    /* Add new user to `users` array (see below) if valid;
      `firstName` is from `name` arg in `new.ejs` <input> tag */
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`); // Redirect to new user's page
  } else {
    console.log('Invalid!');
    // Pre-fill form with user's invalid input
    res.render('users/new', { firstName: req.body.firstName })
  }
});

/* Dynamic Routes: use `:`, then param name */
router
  .route('/:id') // Instead of doing separate "/:id" routes for each 
  .get((req, res) => { 
    // Output: { name: 'Ellie' } if id = 0, or { name: 'Joel' } if id = 1
    console.log(req.user); 
    res.send(`Get User ID: ${req.params.id}`); 
  })
  .put((req, res) => { 
    res.send(`Update User ID: ${req.params.id}`); 
  })
  .delete((req, res) => { 
    res.send(`Delete User ID: ${req.params.id}`); 
  });

const users = [{ name: 'Ellie'}, { name: 'Joel'}];

// Middleware (b/w req and res) that runs when it finds specified param 
router.param('id', (req, res, next, id) => {
  req.user = users[id]; // Add `user` prop to `req` obj
  next(); // Goes to next middleware/route handler (i.e., `router.route('/:id')`)
});

function logger(req, res, next) {
  console.log(req.originalUrl); 
  next();
}

module.exports = router;