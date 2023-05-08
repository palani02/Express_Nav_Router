const e = require('express')
const express = require('express')
const serviceRouter = express.Router()

const ListOfServices = [
    {
        "id":1,
        "Name":"Application Development"
    },
    {
        "id":2,
        "Name":"Website Creation"
    },
    {
        "id":3,
        "Name":"Cloud Services"
    },
    {
        "id":4,
        "Name":"Saas Services"
    }
]
serviceRouter.get('/:id',(req,res)=>{
    // res.send("Service Page")
    const UserId = Number(req.params.id)
    const isAvail = ListOfServices.find((obj1)=>(
        obj1.id == UserId
    ))
    if(!isAvail)
    {
        console.log("Service Not Found")
        res.sendStatus(500)
    }
    else{
        console.log(isAvail.Name)
        res.json(isAvail.Name)
    }

})

module.exports = serviceRouter