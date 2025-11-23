const express = require('express');
const cors = require('cors');
const diagnoseRoutes = require('./routes/diagnoseRoutes');
const dispenseRoutes = require('./routes/dispenseRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', diagnoseRoutes);
app.use('/api', dispenseRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

