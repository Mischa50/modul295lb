const express = require('express');
const session = require('express-session');
const validator = require('validator');

const router = express.Router();

router.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false,
  cookie: {},
}));

const credentials = { email: '', password: 'm295' };

router.post('/login', (request, response) => {
  const { email, password } = request.body;
  // eslint-disable-next-line max-len
  if (validator.isEmail(email) && password == credentials.password) { // Die Funktion "isEmail" stammt von ChatGPT, da es nicht mit "validator.validate" kompatibel war
    request.session.email = email;

    return response.status(200).json({ email: request.session.email });
  }
  return response.status(401).json({ error: 'Invalid credentials' }); // Statuscode 401: Unauthorized
});

router.get('/verify', (request, response) => {
  if (request.session.email) {
    return response.status(200).json({ email: `${request.session.email} is Logged in` });
  }
  return response.status(401).json({ error: 'Not logged in' }); // Statuscode 401: Unauthorized
});

router.delete('/logout', (request, response) => {
  if (request.session.email) {
    request.session.email = null;
    return response.status(200).json({ message: 'Logged out' });
  }
  return response.status(401).json({ error: 'Not logged in' });
});

module.exports = router;
