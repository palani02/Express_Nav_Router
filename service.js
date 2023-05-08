const e = require('express')
const express = require('express')
const serviceRouter = express.Router()

const ListOfServices = [
    {
        // "id":1,
        "Name":"Application Development"
    },
    {
        // "id":2,
        "Name":"Website Creation"
    },
    {
        // "id":3,
        "Name":"Cloud Services"
    },
    {
        // "id":4,
        "Name":"Saas Services"
    }
]
serviceRouter.get('/',(req,res)=>{
    res.send("Service Page")
})

serviceRouter.get('/:id',(req,res)=>{
    // res.send(req.user.Name)
    res.json(req.user.Name)
})

serviceRouter.param('id',(req,res,next,id)=>{
    req.user = ListOfServices[id-1]
    next()
})

module.exports = serviceRouter