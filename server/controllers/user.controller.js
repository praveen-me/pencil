const User = require('./../models/User');

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
  logIn : (req, res) => {
    User.findOne({ _id: req.user._id }, { password: 0 }, function(err, user) {
      if(err) throw err;
      res.json({ user: user })
    });
  }
}