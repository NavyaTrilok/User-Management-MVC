// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const User = require('./model/user'); // Import the User model
const session = require('express-session');
const { logRequest } = require('./middleware/logrequest');
const router = express.Router();
const UserController = require('../controller/userController');
const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
  secret: '1234', // Replace with your secret key
  resave: false,
  saveUninitialized: true,
}));

// Create an array to store user instances
const users = [];

/*function isEmailValid(email) {
    // Use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isPasswordValid(password) {
    // Implement your password complexity requirements here
    // For example, require a minimum length of 8 characters
    return password.length >= 8;
}*/

app.use(logRequest);

app.get('/register', (req, res) => {
    res.render('register', { errorMessage: null });
});

app.get('/menu', (req, res) => {
  res.render('menu', { errorMessage: null });
});

/*app.post('/register', (req, res) => {
    const { username, email, password, confirmedPassword } = req.body;

    // Validation checks
    if (!username || !email || !password || !confirmedPassword) {
        return res.render('register', { errorMessage: 'All fields are required' });
    }

    if (!isEmailValid(email)) {
        return res.render('register', { errorMessage: 'Invalid email format' });
    }

    if (!isPasswordValid(password)) {
        return res.render('register', { errorMessage: 'Password must be at least 8 characters long' });
    }

    if (users.some((user) => user.username === username)) {
        return res.render('register', { errorMessage: 'Username already exists' });
    }

    if (users.some((user) => user.email === email)) {
        return res.render('register', { errorMessage: 'Email address is already registered' });
    }

    if (password !== confirmedPassword) {
        return res.render('register', { errorMessage: 'Passwords do not match' });
    }

    // Create a new User instance
    const newUser = new User(username, email, password);

    // Add the new user to the users array
    users.push(newUser);

    // Redirect to the login page after successful registration
    res.redirect('/login');
});*/


app.get('/login', (req, res) => {
  res.render('login', { errorMessage: null });
});


/*app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Replace this with your actual user authentication logic
  const validUser = users.find((user) => user.username === username && user.password === password);

  if (!validUser) {
      return res.render('login', { errorMessage: 'Invalid username or password' });
  }

  // Set a session or token to maintain the authenticated state
  // Example using Express session (install 'express-session' package)
  req.session.user = validUser;

  res.redirect('/menu'); // Redirect to a dashboard or other authenticated route
});*/

app.get('/update-info', (req, res) => {
  res.render('update-info', { errorMessage: null });
});

/*app.post('/update-info', (req, res) => {
  const { newUsername, newEmail } = req.body;
  console.log(req.body);
  console.log(newUsername)
  console.log(newEmail)
  // Validation checks for new username and email
  if (!newUsername || !newEmail) {
      return res.render('update-info', { errorMessage: 'All fields are required' });
  }

  if (users.some((user) => user.username === newUsername)) {
      return res.render('update-info', { errorMessage: 'Username already exists' });
  }

  if (users.some((user) => user.email === newEmail)) {
      return res.render('update-info', { errorMessage: 'Email address is already registered' });
  }

  
  const userToUpdate = req.session.user; // Get the authenticated user
  userToUpdate.username = newUsername;
  userToUpdate.email = newEmail;
  res.send('Information Updated');

 
});*/

app.get('/update-password', (req, res) => {
  res.render('update-password', { errorMessage: null });
});

/*app.post('/update-password', (req, res) => {
  const { currentPassword, newPassword } = req.body;

  // Replace this with your actual user authentication logic
  const validUser = users.find((user) => user.username === req.session.user.username && user.password === currentPassword);

  if (!validUser) {
      return res.render('update-password', { errorMessage: 'Invalid current password' });
  }

  // Implement complexity requirements for the new password
  // Example: Ensure the new password is at least 8 characters long
  if (newPassword.length < 8) {
      return res.render('update-password', { errorMessage: 'New password must be at least 8 characters long' });
  }

  
  validUser.password = newPassword;
  console.log(newPassword);
  res.send('Password Updated');

 
});*/




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
