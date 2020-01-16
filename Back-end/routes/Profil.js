const express = require('express')
const router = express.Router()
const auth = require('../middelware/auth')

const Coach = require('../modules/Coach')

router.post('/', auth,(req, res) => {
    const { FirstName, LastName, Age, Email, PhoneNumber, Specialite, presentation, Ville, Image, Video, Tarifs } = req.body

    const newProfil = new Coach({
        FirstName,
        LastName,
        Age,
        Email,
        PhoneNumber,
        Specialite,
        presentation,
        Ville,
        Image,
        Video,
        Tarifs,
        user: req.user.id
    })

    newProfil.save()
        .then(profil => res.json(profil))
        .catch(err => {
            console.error(err.message)
            res.status(500).send('Server Error')
        })
})

// GET MY PROFIL
router.get('/:id', auth, (req, res) => {
    Coach.find({user: req.user.id})
        .then(profil => res.json(profil))
        .catch(err => {
            console.error(err.message)
            res.status(500).send('Server Error')
        })
})


// GET ALL PROFILS
router.get('/all', (req, res) => {
    Profil.find()
        .then(profils => res.json(profils))
        .catch(err => console.error(err.message))
})


module.exports = router