const express = require('express');
const router = express.Router();
const connection = require('./connection');
const cors = require('cors');
router.use(cors())
// Get all students (for example purposes)
router.get('/get', (req, res) => {
    var query = "SELECT * FROM student";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    });
});

// Delete a student by name
router.delete('/student/:name', (req, res) => {
    const studentId = req.params.name;
    var query = "DELETE FROM student WHERE name = ?";
    connection.query(query, [studentId], (err, result) => {
        if (err) {
            console.error('Error deleting data: ', err);
            return res.status(500).send('Error deleting data', err);
        }
        console.log('Data deleted successfully');
        res.status(200).send('Data deleted successfully');
    });
});

// Update a student by name
router.patch('/update', (req, res) => {
    let user = req.body;
    var query = "UPDATE student SET age = ? WHERE name = ?";
    connection.query(query, [user.age, user.name], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "User name not found" });
            }
            return res.status(200).json({ message: "User updated successfully" });
        } else {
            return res.status(500).json({ error: err.message });
        }
    });
});

// Insert a new student
router.post('/use', (req, res) => {
    const use = req.body;
    var query = "INSERT INTO student (name, age) VALUES (?, ?)";
    connection.query(query, [use.name, use.age], (err) => {
        if (err) {
            console.error('Error inserting data: ', err);
            return res.status(500).send('Error inserting data', err);
        } else {
            console.log('Data inserted successfully');
            res.status(200).send('Data inserted successfully');
        }
    });
});

// Register a new user
router.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    const query = "INSERT INTO registration (username, password, email) VALUES (?, ?, ?)";
    connection.query(query, [username, password, email], (err) => {
      if (err) {
        console.error('Error registering user: ', err);
        return res.status(500).send('Error registering user');
      } else {
        console.log('User registered successfully');
        return res.status(200).send('User registered successfully');
      }
    });
  })
  router.get('/users', (req, res) => {
    const query = "SELECT * FROM registration";
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching users: ', err);
        return res.status(500).send('Error fetching users');
      }
      res.status(200).json(results);
    });
  });
  
  // Update a user


// Get all users
router.get('/users', (req, res) => {
    const query = "SELECT * FROM registration";
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users: ', err);
            return res.status(500).json({ message: 'Error fetching users', error: err.message });
        }
        res.status(200).json(results);
    });
}); 

// Get a user by ID
router.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const query = "SELECT * FROM registration WHERE id = ?";
    connection.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching user: ', err);
            return res.status(500).json({ message: 'Error fetching user', error: err.message });
        }
        if (results.length > 0) {
            res.status(200).json(results[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });
});

// Update a user by ID
router.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { username, password, email } = req.body;
    const query = "UPDATE registration SET username = ?, password = ?, email = ? WHERE id = ?";
    connection.query(query, [username, password, email, userId], (err, results) => {
        if (err) {
            console.error('Error updating user: ', err);
            return res.status(500).json({ message: 'Error updating user', error: err.message });
        }
        if (results.affectedRows > 0) {
            res.status(200).json({ message: 'User updated successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    console.log(`Login attempt with username: ${username} and password: ${password}`);

    const query = 'SELECT * FROM registration WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        if (results.length > 0) {
            // User found and password matches
            console.log(`User found: ${JSON.stringify(results[0])}`);
            res.json({ success: true });
        } else {
            // User not found or password does not match
            console.log('User not found or password does not match');
            res.json({ success: false });
        }
    });
});

// Delete a user by ID
router.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const query = "DELETE FROM registration WHERE id = ?";
    connection.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error deleting user: ', err);
            return res.status(500).json({ message: 'Error deleting user', error: err.message });
        }
        if (results.affectedRows > 0) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });
});
router.post('/businesses', (req, res) => {
    const { username, phoneno, quantity, price, location } = req.body;
    const query = "INSERT INTO dealer (username, phoneno, quantity, price, location) VALUES (?, ?, ?, ?, ?)";
    
    connection.query(query, [username, phoneno, quantity, price, location], (err, results) => {
      if (err) {
        console.error('Error entering data:', err);
        return res.status(500).send('Error entering data');
      }
      console.log('Data entered successfully');
      res.status(200).send({ message: 'Data entered successfully', id: results.insertId });
    });
  });
  
  // GET endpoint to retrieve all businesses
 
  
  // GET endpoint to retrieve a specific business by ID
  router.get('/businesses/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const query = "SELECT * FROM dealer WHERE id = ?";
    
    connection.query(query, [userId], (err, results) => {
      if (err) {
        console.error('Error fetching user:', err);
        return res.status(500).json({ message: 'Error fetching user', error: err.message });
      }
      if (results.length > 0) {
        res.status(200).json(results[0]);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    });
  });
  router.get('/farmers', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const query = "SELECT * FROM farmers WHERE id = ?";
    
    connection.query(query, [userId], (err, results) => {
      if (err) {
        console.error('Error fetching user:', err);
        return res.status(500).json({ message: 'Error fetching user', error: err.message });
      }
      if (results.length > 0) {
        res.status(200).json(results[0]);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    });
  });
  router.post('/farmersi', (req, res) => {
    const { farmer, phoneno, type, price, location } = req.body;
    const query = "INSERT INTO farmers (farmer, phoneno, type, price, location) VALUES (?, ?, ?, ?, ?)";
    
    connection.query(query, [farmer, phoneno, type, price, location], (err, results) => {
      if (err) {
        console.error('Error entering data:', err);
        return res.status(500).send('Error entering data');
      }
      console.log('Data entered successfully');
      res.status(200).send({ message: 'Data entered successfully', id: results.insertId });
    });
  });
 
module.exports = router;



