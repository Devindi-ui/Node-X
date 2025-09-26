const db = require('../config/database');

class Customer{
    static create(customerData, result){
        const sql = 'INSERT INTO customers(nic, name, city, contact) VALUES(?, ?, ?, ?)';
        db.query(sql,
            [customerData.nic, customerData.name, customerData.city, customerData.contact],
            result
        );
    }

    static getAll(result){
        const sql = 'SELECT * FROM customers';
        db.query(sql, result);
    }
}

module.exports = Customer;