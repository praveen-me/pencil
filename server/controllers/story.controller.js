const fs = require('fs');
const Story = require('./../models/Story');

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

    const newStory = Story({
      ...story
    });


    newStory.save((err, data) => {
      if(err) return res.json({
        msg : 'Unable to save story.'
      }) 
      res.json(data); 
    })
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