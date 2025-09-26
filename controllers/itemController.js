const Item = require('../model/itemModel');

const ItemController = {
    createItem: (req, res) => {
        const {itemName,desc, unitPrice, category} = req.body;
        Item.create(
            {itemName, desc, unitPrice, category},
            (err, result)=>{
                if(err){
                    return res.status(500).json({error: 'Database error'+ err});
                }
                res.status(201).json({message: 'Item created', data: result});
            }
        );
    },
    getAllItems:(req,res)=>{
        Item.getAll(
            (err, result)=> {
                if(err){
                    return res.status(500).json({error: 'Database error'+ err});
                }
                if(result.length === 0){
                    return res.status(404).json({message: 'No items found'});
                }
                res.status(200).json({data: result});
            }
        );
    },

    getItemById:(req,res) => {
        const {id} = req.params;
        Item.getById(id,
            (err,result) => {
                if(err){
                    return res.status(500).json({error: 'Database error' + err});
                }
                if(result.length === 0){
                    return res.status(404).json({message: 'Item not found'});
                }
                res.status(200).json({data: result});
            }
        );
    },

    updateItem: (req, res) => {
        const {id} = req.params;
        const {itemName, desc, unitPrice, category} = req.body;

        Item.update(id, {itemName, desc, unitPrice, category}, (err, result) => {
            if(err){
                return res.status(500).json({message: "Database error", error: err});
            }
            res.status(200).json({message: "Item updated successfully", data: result});
        });
    },

    deleteItem:(req, res) => {
        const {id} = req.params;
        Item.delete (id, (err, result) => {
            if(err){
                return res.status(500).json({message: "Database error", error: err});
            }
            if(result.affectedRows === 0){
                return res.status(404).json({message: "Item not found"});
            }
            res.status(200).json({message: "Item deleted successfully", data: result});
        });
    }
}

module.exports = ItemController;