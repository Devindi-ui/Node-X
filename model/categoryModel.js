const db = require('../config/database');

class Category{
    static create(categoryData, result){
        const sql = 'INSERT INTO categories(name,description) VALUES(?,?)';
        db.query(sql,
            [categoryData.name, categoryData.description],
            result
        );
    }

    static getAll(result){
        const sql = 'SELECT * FROM categories';
        db.query(sql, result);
    }

    static getById(id, result){
        const sql = 'SELECT * FROM categories WHERE id = ?';
        db.query(sql,[id], result);
    }

    static update(id, categoryData, result){
        const sql = 'UPDATE categories SET name = ?, description = ? WHERE id = ?';
        db.query(sql, [categoryData.name, categoryData.description, id], result);
    }

    static delete(id, result){
        const sql = 'DELETE FROM categories WHERE id = ?';
        db.query(sql, [id], result);
    }
}

module.exports = Category;