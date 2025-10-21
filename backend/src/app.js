const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const technicianRoutes = require('./routes/technicianRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));

app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/technicians', technicianRoutes);

app.get('/', (req, res) => res.send('Fix4Ever API'));

app.use(errorHandler);

module.exports = app;
