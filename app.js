/**
 * app.js
 * 
 * CinemaWorld February 4th, 2024
 * 
 * Osman Elias
 * 
 * 
 *  app file to run application
 * 
 */

require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./src/models/User');
const flash = require('connect-flash');

const app = express();

app.use(express.static(path.join(__dirname, 'src', 'public')));

app.use(session({
  secret: process.env.SECRET_KEY, 
  resave: false, // Avoid resaving sessions that haven't been modified
  saveUninitialized: false, 
  cookie: { secure: 'false', httpOnly: true } // Use secure cookies 
}));


// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware setup
app.use(passport.initialize());
const authMiddleware = require('./src/middleware/authentication');


app.use(authMiddleware.initialize());
app.use(authMiddleware.session());

// Database connection
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});







/*Routes*/

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { 
      return next();
  }
  // Redirect unauthenticated requests to the login page
  res.redirect('/login');
}



app.get('/', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'public', 'index.html'));
});


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'public', 'login.html'));
});


app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'public', 'register.html'));
});


//Handling duplicate email or username
app.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.redirect('/login'); // Redirect to login on successful registration
  } catch (error) {
    // Check for duplicate key error
    if (error.code === 11000) {
      return res.status(400).send("Email or username already exists.");
    }
    console.error(error); // Log the error for debugging
    return res.status(500).send("An error occurred.");
  }
});


// Handling user login
app.post('/login', passport.authenticate('local', {
  successRedirect: '/', // Redirect to the homepage 
  failureRedirect: '/login', // Redirect back to the login page on failure
  failureFlash: false 
}));































// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
