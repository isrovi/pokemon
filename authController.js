const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../User');
require('dotenv').config();

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findByEmail(email);

    if (userExists) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const user = await User.createUser(name, email, password);

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Error registering user', error);
    res.status(500).json({ error: 'Error registering user' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByEmail(email);

    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      
      const passwordMatch = await bcrypt.compare(password, user.password);
      
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      
      res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error logging in', error);
        res.status(500).json({ error: 'Error logging in' });
    }
};