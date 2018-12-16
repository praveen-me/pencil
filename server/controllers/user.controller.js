const User = require('./../models/User');
const passport = require('passport');
const Story = require('./../models/Story');
const mongoose = require('mongoose');

module.exports = {
  signUp : (req, res) => {
    const user = req.body;
    console.log(user.username)
    const newUser = new User({
      ...user,
      _id : new mongoose.Types.ObjectId()
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
            data : data,
            stories : data.stories
          })
        })
      });
    })(req, res, next);
  }, 
  isLoggedIn : (req, res) => {
    if(req.user) {
      User.findOne({_id : req.user._id}, {password : 0}, (err, data) => {
        if(err) throw err;
        return res.json({
          data : data
        })
      })
    } else {
      return res.status(401).json({
        msg : "Please login to get your details."
      })
    }
  }
}