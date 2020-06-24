var express = require('express');
var router = express.Router();

require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_TOKEN;

const User = require('../models/user');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error registering new user' });
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if(!user) {
      res.status(401).json({ error: 'Incorrect email' });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if(!same) {
          res.status(401).json({ error: 'Incorrect password' });
        } else {
          const token = jwt.sign({ email }, secret, { expiresIn: '1d' });
          res.json({ user: user, token: token });
        }
      })
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal error, please try again' });
  }
})

module.exports = router;
