const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {type:String, unique: true, required:true}, // String is shorthand for {type: String}
  password: String,   
  role: {
    type: String,
    enum : ['project Manager', 'Developer', 'Staff', 'Software Engineer'],
    default: 'Staff'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User