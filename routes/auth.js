const router = require('express').Router()
const User = require('../models/User')
const joi = require('@hapi/joi')

router.post('/register',async (req,res)=>{
    console.log('request made at',Date.now())
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        hashPassword: req.body.password,
        swoosh_handle: req.body.email,
        swoosh_level: "noob",
        profile_url: "",
        thumbnail: "",
        reviews: [],
        comments: [],
        bookings: [],
        favorites: [],
        photos: []
    })
    try{
        const savedUser = await user.save()
        res.send(savedUser)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.post('/login',(req,res)=>{
    res.send('login')
})

module.exports = router