const db = require('../config/database');

class Customer{
    static create(customerData, result){
        const sql = 'INSERT INTO customers(name, city, contact) VALUES(?, ?, ?)';
        
    }
}