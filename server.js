// server.js
const app = require('./app.js');
const connectDB = require('./config/db.js');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
