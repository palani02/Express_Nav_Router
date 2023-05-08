const express = require('express')
const app = express()
const About = require('./About.js')
const service = require('./service.js')
const contact = require('./contact.js')
const plan = require('./Plan.js')
app.get('/',(req,res)=>{
    res.send("Home Page")
})
app.use('/contact',contact)
app.use('/About',About)
app.use('/service',service)
app.use('/plan',plan)
app.listen(3200)