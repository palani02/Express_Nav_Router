const express = require('express')
const planRouter = express.Router()

planRouter.get('/',(req,res)=>{
    res.send("Plans for the Future")
})

module.exports = planRouter