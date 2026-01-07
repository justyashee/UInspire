const { Schema, model } = require('../connection');

const mySchema = new Schema({
      name: String,
      email: { type: String, require: true, unique: true },
      password: { type: String, require: true },
      profileImage: { type: String, default: '' },
      createdAt: { type: Date, default: Date.now }
});

module.exports = model('user', mySchema);  //calling the model
