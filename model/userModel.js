const db = require ('../config/database');

class User{
    static create(userData, result){
        const sql = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)';
        db.query(sql, [userData.name, userData.email, userData.age], result);
    }

    static getAll(result){
        const sql = 'SELECT * FROM users';
        db.query(sql, result);
    }

    static update(id, userData, result){
        const sql = 'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?';
        db.query(sql,[userData.name, userData.email, userData.age, id], result);
    }

    static delete(id,result){
        const sql = 'DELETE FROM users WHERE id = ?';
        db.query(sql,[id],result);
    }
}

module.exports = User;  