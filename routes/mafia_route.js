const express = require('express')
const router = express.Router()
const Mafia = require('../models/mafia')
const Fbi = require('../models/fbi')

router.get('/:id/mafia/', async (req, res)=> {
  try {
    const AllMafia = await Mafia.find()
    res.json(AllMafia)
  } catch(err){
    res.json({ message: err})
  }
})

router.post('/:id/mafia', async (req, res)=> {

    const {id} = req.params
    const fbi_user = await Fbi.findById(id)

    const addMafia = new Mafia({
      mafia_name: req.body.mafia_name,
      fbi: fbi_user
    })

    try{
      const addNewMafia = await addMafia.save()
      res.json(addNewMafia)
    }catch(err){
      res.json({message: err})
    }

})


router.get('/:id/mafia/:id_mafia', async (req, res)=> {
  try{
    const fbiId = await Mafia.findById(req.params.id_mafia)
    res.json(fbiId)
  }
  catch(err){
    res.json({message: err})
  }
})

module.exports = router