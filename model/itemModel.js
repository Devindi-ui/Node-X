const db = require('../config/database');

class Item{
    //insert data 
    static create (itemData, result){
        const sql = 'INSERT INTO items(itemName, description, unitPrice, category) VALUES(?,?,?,?)';
        db.query(sql,
            [itemData.itemName, itemData.desc, 
                itemData.unitPrice, itemData.category],
                result
        );
    }

    //getting data from DB
    static getAll(result){
        const sql = 'SELECT * FROM items';
        db.query(sql, result);
    }

    static getById(id, result){
        const sql = 'SELECT * FROM items WHERE id = ?';
        db.query(sql, [id], result);
    }

    static update(id, itemData, result){
        const sql = 'UPDATE items SET itemName = ?, description = ?, unitPrice = ?, category = ? WHERE id = ?';
        db.query(sql, [itemData.itemName, itemData.description, itemData.unitPrice, itemData.category, id], result);
    }

    static delete(id, result){
        const sql = 'DELETE FROM items WHERE id = ?';
        db.query(sql, [id], result);
    }
}

module.exports = Item;