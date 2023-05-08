const express = require('express')
const serviceRouter = express.Router()

serviceRouter.get('/',(req,res)=>{
    res.send("Service Page")
})

module.exports = serviceRouter