const express = require('express')
const router = express.Router()
const Fbi = require('../models/fbi')

router.get('/', async (req, res)=> {
  try {
    const AllFbi = await Fbi.find()
    res.json(AllFbi)
  } catch(err){
    res.json({ message: err})
  }
})

router.post('/', async (req, res)=> {
  const fbiPost = new Fbi({
    name: req.body.name,
    date: Date.now()
  })
  try{
    const addFbi = await fbiPost.save()
    res.json(addFbi)
  }
  catch(err){
    res.json({message: err})
  }
})

module.exports = router