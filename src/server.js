const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/assignments', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const assignmentSchema = new mongoose.Schema({
    name: String,
    title: String,
    due: String,
    status: String
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

app.get('/assignments', async (req, res) => {
    const assignments = await Assignment.find();
    res.json(assignments);
});

app.post('/assignments', async (req, res) => {
    const newAssignment = new Assignment(req.body);
    await newAssignment.save();
    res.json(newAssignment);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
