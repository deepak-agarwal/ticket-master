const Customer = require('../model/customer')

module.exports.list =  (req, res) => {
    Customer.find()
      .then(customers => res.json(customers))
      .catch(err => {
        console.log(err);
      });
  }

  module.exports.show =(req,res) =>{
    const id = req.params.id
    Customer.findById(id)
    .then(customer=>{
        if (customer) {
            res.json(customer)
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
    console.log(body)
    const customer = new Customer({
      name:body.name,
      email:body.email,
      mobile:body.mobile
    });
    customer
      .save()
      .then(customer => {
        res.json(customer);
      })
      .catch(err => {
        res.json(err);
      });
  }

  module.exports.update = (req,res) =>{
    const id = req.params.id
    const body = req.body
    Customer.findByIdAndUpdate(id,body,{new : true,useFindAndModify:false,runValidators:true})
    .then(customer=>{
        if (customer) {
            res.json(customer)
        } else {
            res.json({})
        }
    })
    .catch(err=>{
        res.json(err)
    })
  }

  module.exports.destroy = (req,res) => {

    const id = req.params.id
    Customer.findByIdAndDelete(id,{useFindAndModify:false})
    .then(customer=>{
        if (customer) {
            res.json(customer)
        } else {
            res.json({})
        }
        
    })
    .catch(err=>{
        res.json(err)
    })

}