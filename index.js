const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

//New Google strategy creates a new google strategy instance
passport.use(new GoogleStrategy());


const PORT = process.env.PORT || 5000;
app.listen(PORT);
