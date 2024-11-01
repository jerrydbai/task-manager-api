const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());

// Use /api/tasks for all task-related endpoints
app.use('/api/tasks', taskRoutes);

module.exports = app;