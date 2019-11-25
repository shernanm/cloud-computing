const mongoose = require('../../config/db');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'name is required']
  },
  teacher: {
    type: String,
    required: false
  },
  estado: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('subjects', subjectSchema);
