const fs = require('fs');
const Story = require('./../models/Story');
const User = require('./../models/User');

module.exports = {
  addStory : (req, res) => {
    const story = req.body;
    // const imageURL = req.body.cover;

    // fs.readFile(imageURL, (err, data) => {
    //   // let extensionName = path.extname(`${process.cwd()}/pics/demopic.png`);

    //   let base64Image = new Buffer(data, 'binary').toString('base64');
    //   // let imgSrcString = `data:image/${extensionName.split('.').pop()};base64,${base64Image}`;
    //   res.send(base64Image);
    // });

    // res.wri
    // if(req.user) {
    //   User.findOne({_id : req.user._id}, {password : 0}, (err, data) => {
    //     if(err) throw err;
    //     return res.json({
    //       data : data
    //     })
    //   })
    // }    

    const newStory = Story({
      ...story,
      user : req.user._id,
      userName : req.user.fullName
    });

    res.json({
      newStory,
      fullName : req.user.fullName
    })
    // newStory.save((err, data) => {
    //   if(err) return res.json({
    //     msg : 'Unable to save story.'
    //   }) 
    //   res.json(data); 
    // })
  },
  getAllStories : (req, res) => {
    Story.find({}, (err, data) => {
      if (err) return res.status(500).json({
        msg : "Internal Server Problem."
      }) 
      if(data.length) {
        return res.json({
          allStories : data
        })
      } else {
        return res.json({
          msg : 'No Articles Avilable.'
        })
      }
    }) 
  }
}