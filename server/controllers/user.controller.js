const User = require('./../models/User');
const passport = require('passport');

module.exports = {
  signUp : (req, res) => {
    const user = req.body;
    console.log(user.username)
    const newUser = new User({
      ...user
    })

    User.findOne({username : user.username}, (err, data) => {
      if(data) {
       return res.status(302).json({
          'msg' : 'username is not available'
        })
      } else {
        newUser.save((err, data) => {
          if(err) return res.json({
            "msg" : "Problem in saving your data. Please try again."
          })
          res.status(200).json({
            msg : "Signup Successful"
          })
        });
      }     
    })
  }, 
  logIn : function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      
      if (!user) { 
        return res.status(404).json({
          msg :  "Invalid user creadentials. Please try again."
        }) 
      }
  
      req.logIn(user, function(err) {
  
        if (err) { return next(err); }
        
        User.findOne({_id : user._id}, {password : 0}, (err, data) => {
          if(err) throw err;
          return res.json({
            data
          })
        })
      });
    })(req, res, next);
  }
}