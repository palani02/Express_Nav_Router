const express = require('express')
const contactRouter = express.Router()

contactRouter.get('/',(req,res)=>{
    res.send("Contact Info")
})

module.exports = contactRouter