const express = require('express')
const router = express.Router()
const Mafia = require('../models/mafia')
const Fbi = require('../models/fbi')
const Members = require('../models/members')

router.get('/members/', async (req, res)=> {
    try {
        const AllMembers = await Members.find()
        res.json(AllMembers)
      } catch(err){
        res.json({ message: err})
      }
})
router.get('/:id_mafia/members/', async (req, res)=> {
    try {
        const {id_mafia} = req.params
        const AllMembers = await Members.find({ 
            $and: [
                {$or: [{member_type: id_mafia }]},
                {$or: [{ member_position: 'employee'}]},
            ]
        })
        AllMembers.length >= 50 ? res.json(AllMembers) : res.json({message: 'this mafia has less than 50 members'})
      } catch(err){
        res.json({ message: err})
      }
})

router.get('/:id_mafia/ranks/', async (req, res)=> {
    try {
        const {id_mafia} = req.params
        const AllMembers = await Members.find({ member_type: id_mafia,  year_as_member: req.body.year_as_member})
        Math.min(AllMembers) >= 2 ? res.json(AllMembers) : res.json({message: 'there is no older than this'})
      } catch(err){
        res.json({ message: err})
      }
})

router.post('/:id_mafia/members', async (req, res)=> {

    const {id_mafia} = req.params
    const mafiaId = await Fbi.findById(id_mafia)

    const addMember = new Members({
        name: req.body.name,
        member_type: mafiaId,
        member_position: req.body.member_position,
        special_surveillance: req.body.surveillance,
        year_as_member: req.body.years_as_member,
        prision: req.body.prision
    })

    try{
      const addNewMafiaMember = await addMember.save()
      res.json(addNewMafiaMember)
    }catch(err){
      res.json({message: err})
    }

})

module.exports = router