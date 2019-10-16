const Employee = require('../model/employee')

module.exports.list =  (req, res) => {
    Employee.find().populate('department')
      .then(employees => res.json(employees))
      .catch(err => {
        console.log(err);
      });
  }
  
  module.exports.show =  (req,res) =>{
    const id = req.params.id
    Employee.findById(id)
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
    const employee = new Employee({
      name: body.name,
      email: body.email,
      mobile: body.mobile,
      department:body.department
    });
    employee
      .save()
      .then(employee => {
        res.json(employee);
      })
      .catch(err => {
        res.json(err);
      });
  }

  module.exports.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    Employee.findByIdAndUpdate(id,body,{new : true,useFindAndModify:false,runValidators:true})
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

  module.exports.destroy = (req,res) =>{
    const id = req.params.id
    Employee.findByIdAndDelete(id,{useFindAndModify:false})
    .then(employee=>{
        if (employee) {
            res.json(employee)
        } else {
            res.json({})
        }
    })
    .catch(err=>{
        res.json(err)
    })
  }