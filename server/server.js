const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Dockerized MongoDB URI (important change here)
const mongoURI = process.env.MONGO_URI || "mongodb://mongo:27017/mern_db";

mongoose.connect(mongoURI, { })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
  name: String
});

const User = mongoose.model('User', UserSchema);

// ADD THIS ROUTE for root URL:
app.get('/', (req, res) => {
  res.send('Backend server is running successfully!');
});

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.json(user);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
