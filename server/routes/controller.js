const express = require("express");
const collection = require("../dbaccessor/dbaccessor");

const passport = require('passport');
const bcrypt = require("bcrypt")
const router = express.Router();

const users = [] //will be deleted: users will go to DB

router.get('/', async (req,res)=>{
  var data = {}
  const cursor = collection.find({})
  await cursor.forEach((element) => {
    data[element.title] = element
  })
  res.json(data);
})


router.post('/', (req, res) => {
  const chore = {
    title: req.body.title,
    description: req.body.description,
    time: req.body.time,
    tags: req.body.tags,
    completionStatus: false
  }
  collection.insertOne(chore);
})

router.post('/register', async (req, res) => {
  const hashedP = await bcrypt.hash(req.body.password, 10);
  users.push({
    id: Date.now().toString(),
    username: req.body.username,
    password: hashedP
  })
  res.send("Register")
})

router.post('/login', passport.authenticate('local'), (req,res) => {
  res.send("Logged in:" + req.isAuthenticated());
});

router.post('/logout', (req, res) => {
  req.logout();
  res.send("Logged out");
})

router.get('/auth', (req, res) => {
  if (!req.isAuthenticated()){
    res.json({status: false})
  } else {
    res.json({status: true, username: req.user.username})
  }
});


module.exports = {
  router: router,
  users: users
};