const {Schema, model} = require('../connection');

const mySchema = new Schema ({
      fullName: String,
      email: { type: String, require: true, unique: true},
      password: {type : String, require: true },

      createdAt:{ type: Date, default :Date.now }
});

module.exports=model('user', mySchema);  //calling the model
