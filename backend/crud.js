const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./connection');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define routes
app.get('/api/students', (req, res) => {
  const query = "SELECT * FROM student";
  connection.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
});

app.post('/api/students', (req, res) => {
  const { username, password, email } = req.body;
  const query = "INSERT INTO student (username, password, email) VALUES (?, ?, ?)";
  connection.query(query, [username, password, email], (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('Student added successfully');
  });
});

app.put('/api/students/:id', (req, res) => {
  const { id } = req.params;
  const { username, password, email } = req.body;
  const query = "UPDATE student SET username = ?, password = ?, email = ? WHERE id = ?";
  connection.query(query, [username, password, email, id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Student updated successfully');
  });
});

app.delete('/api/students/:id', (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM student WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Student deleted successfully');
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
