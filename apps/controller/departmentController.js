const Department = require('../model/department')

module.exports.list = (req, res) => {
    Department.find()
      .then(departments => res.json(departments))
      .catch(err => {
        console.log(err);
      });
  }
  
  module.exports.show = (req,res) =>{
    const id = req.params.id
    Department.findById(id)
    .then(note=>{
        if (note) {
            res.json(note)
        } else {
            res.json({})
        }
    })
    .catch(err=>{
        res.json(err)
    })
  }
module.exports.create =  (req, res) => {
    const body = req.body;
    const department = new Department({ name: body.name });
    department
      .save()
      .then(department => {
        res.json(department);
      })
      .catch(err => {
        res.json(err);
      });
  }
  module.exports.update = (req,res) =>{
    const id = req.params.id
    const body = req.body
    Department.findByIdAndUpdate(id,body,{new : true,useFindAndModify:false,runValidators:true})
    .then(note=>{
        if (note) {
            res.json(note)
        } else {
            res.json({})
        }
    })
    .catch(err=>{
        res.json(err)
    })
  }
  module.exports.destroy = (req,res)=>{
    const id = req.params.id
    Department.findByIdAndDelete(id,{useFindAndModify:false})
    .then(note=>{
        if (note) {
            res.json(note)
        } else {
            res.json({})
        }
        
    })
    .catch(err=>{
        res.json(err)
    })
  }