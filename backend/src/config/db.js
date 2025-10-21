const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/fix4ever';
  await mongoose.connect(uri, {
  });
  console.log('MongoDB connected');
};

module.exports = connectDB;
