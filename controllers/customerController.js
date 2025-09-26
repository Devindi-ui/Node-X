const Customer = require('../model/customerModel');

const customerController = {
    createCustomer: (req, res) => {
        const {nic, name, city, contact} = req.body;
        Customer.create(
            {nic, name, city, contact},
            (err, result) => {
                if(err){
                    console.log(err);
                    return res.status(500).json({error: 'Database error' + err});
                }
                res.status(201).json({message: 'Category created', data: result});
            }
        );
    },
}

module.exports = customerController;