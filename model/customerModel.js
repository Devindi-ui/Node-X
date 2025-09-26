const db = require('../config/database');

class Customer{
    static create(customerData, result){
        const sql = 'INSERT INTO customers(nic, name, city, contact) VALUES(?, ?, ?, ?)';
        db.query(sql,
            [customerData.nic, customerData.name, customerData.city, customerData.contact],
            result
        );
    }
}

module.exports = Customer;