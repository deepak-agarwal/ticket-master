const Ticket = require('../model/ticket')

module.exports.list = (req,res) =>{
 Ticket.find().populate('departmentId').populate('employeeIds').populate('customerId')
 .then(tickets => res.json(tickets))
 .catch(err => console.log(err))
}

module.exports.create = (req,res) =>{
    const body = req.body;
    console.log(body)
    const ticket = new Ticket(
       body
    )
    ticket.save()
    .then(ticket => {
        res.json(ticket)
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports.show = (req,res) =>{
    const id = req.params.id
    // console.log(id)
    Ticket.findById(id).populate('departmentId').populate('employeeIds').populate('customerId')
    .then(ticket=>{
        if (ticket) {
            res.json(ticket)
        } else {
            res.json({})
        }
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.update = (req,res) =>{
    const id = req.params.id
    const body = req.body
    Ticket.findByIdAndUpdate(id,body,{new:true,useFindAndModify:false,runValidator:true})
        .then(ticket => {
            if(ticket)
            res.json(ticket)
            else
            res.json({})
        })
        .catch(err => console.log(err))
}

module.exports.softDestroy = (req,res) =>{
    const id = req.params.id
    const body = req.body
    Ticket.findByIdAndUpdate(id,body,{new:true,useFindAndModify:false,runValidator:true})
    .then(ticket => {
        if(ticket)
        res.json(ticket)
        else
        res.json(ticket)
    .catch(err => console.log(err))
    })
}

module.exports.destroy = (req,res) =>{
    const id = req.params.id
    Ticket.findByIdAndDelete(id,{useFindAndModify:false})
    .then(ticket => {
        if(ticket)
        res.json(ticket)
        else
        res.json(ticket)
    .catch(err => console.log(err))
    })
}