"use strict";

var mongoose = require('mongoose');

var addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
    lowercase: true
  },
  _id: false,
  city: {
    type: String,
    required: true
  }
});
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 1,
    max: 100
  },
  email: {
    type: String,
    required: true
  },
  department: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user"
  },
  hobbies: [String],
  address: addressSchema
}, {
  timestamps: true
});
module.exports = mongoose.model('user', userSchema);
//# sourceMappingURL=user.dev.js.map
