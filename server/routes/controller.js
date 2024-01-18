const express = require("express");
const router = express.Router();
const collection = require("../dbaccessor/dbaccessor");

router.get('/', async (req,res)=>{
  var data = {}
  const cursor = collection.find({})
  await cursor.forEach((element) => {
    data[element.title] = element
  })
  res.json(data);
})


router.post('/', (req, res) => {
  res.send(req.body.description);
  const chore = {
    title: req.body.title,
    description: req.body.description,
    time: req.body.time,
    tags: req.body.tags,
    completionStatus: false
  }
  collection.insertOne(chore);
  })


router.get('/:userid', (req, res) => {
    res.send(req.params.userid)
})

module.exports = router;