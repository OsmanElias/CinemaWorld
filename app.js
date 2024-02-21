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
const flash = require('connect-flash');

// Import routes
const userRoutes = require('./src/routes/route');
const apiRoutes = require('./src/routes/api');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SECRET_KEY, 
  resave: false,
  saveUninitialized: false, 
  cookie: { secure: false, httpOnly: true }
}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(flash());

const authMiddleware = require('./src/middleware/authentication');
app.use(authMiddleware.initialize());
app.use(authMiddleware.session());

const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Use routes
app.use('/', userRoutes);
app.use('/api', apiRoutes);





//START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));






















