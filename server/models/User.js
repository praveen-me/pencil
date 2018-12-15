const mongoose = require('mongoose');
const SALT_FACTOR = 10;
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username : String,
  fullName : String,
  email : String,
  password : String
})

//making mmethod for decrypt password and compare with the original one
userSchema.methods.verifyPassword = function(userPassword, cb) {
  // for userpassword === hash
  bcrypt.compare(userPassword, this.password, function(err, res) {
    if(err) cb(err, false);
    cb(null, res);
  })
}

// Hash the password before save
userSchema.pre('save', function(next) {
  const password = this.password;

  if(this.isModified(password)) return next();

  bcrypt.hash(password, SALT_FACTOR, (err, hash) => {
    if(err) throw err;
    this.password = hash;
    next();
  })

})

const User = mongoose.model('User', userSchema);

module.exports = User;
