const express = require('express')
const aboutRouter = express.Router()

aboutRouter.get('/',(req,res)=>{
    res.send("About Page")
})

module.exports = aboutRouter