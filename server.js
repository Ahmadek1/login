const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Initialize the express application
const app = express();
// Configure CORS middleware
app.use(cors());
// Configure body-parser middleware
app.use(bodyParser.json()); // Middleware to parse JSON requests
// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'goljano',
});
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.message);
  } else {
    console.log('Connected to the database');
  }
});
// Registration endpoint
app.post('/register', (req, res) => {
  const { FirstName, LastName, UserName, Password, Email } = req.body;
  // Insert user data into the database
  const insertQuery = 'INSERT INTO users (FirstName, LastName, UserName, Password, Email) VALUES (?, ?, ?, ?, ?)';
  db.query(insertQuery, [FirstName, LastName, UserName, Password, Email], (error, results) => {
    if (error) {
      console.error('Error inserting user data:', error);
      res.status(500).json({ error: 'Registration failed' });
    } else {
      console.log('User registered successfully');
      res.status(200).json({ message: 'Registration successful' });
    }
  });
});
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.post('/login', (req, res) => {
    const { UserName, Password } = req.body;
    // Query to check the user in the database
    const query = 'SELECT * FROM users WHERE UserName = ? AND Password = ?';
    db.query(query, [UserName, Password], (error, results) => {
      if (error) {
        // Handle any errors in the query
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        if (results.length > 0) {
          // User found
          res.status(200).json({ message: 'Login successful', user: results[0] });
        } else {
          // User not found
          res.status(401).json({ error: 'Invalid credentials' });
        }
      }
    });
  });