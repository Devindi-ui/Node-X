const Category = require('../model/categoryModel');

const categoryController = {
    createCategory: (req, res) => {
        const {name, description} = req.body;
        Category.create(
            {name, description},
            (err, result) => {
                if(err){
                    console.log(err);
                    return res.status(500).json({error: 'Database error'});
                }
                res.status(201).json({message: 'Category created', data: result});
            }
        );
    },

    getAllCategories:(req, res) => {
        Category.getAll(
            (err, result) => {
                if(err){
                    return res.status(500).json({error: 'Database error' + err});
                }
                if(result.length === 0){
                    return res.status(404).json({message: 'No Category found'});
                }
                res.status(200).json({data:result});
            }
        );
    },

    getCategoryById:(req, res) => {
        const {id} = req.params;
        Category.getById(id,
            (err, result) => {
                if(err){
                    return res.status(500).json({error: 'Database error' + err})
                }
                if(result.length === 0){
                    return res.status(404).json({message: 'Category not found'});
                }
                res.status(200).json({data:result});
            }
        );
    },

    updateCategory: (req, res) => {
        const {id} = req.params;
        const {name, description} = req.body;

        Category.update(id, {name, description}, (err, result) => {
            if(err){
                return res.status(500).json({message: "Database error", error:err});
            }
            res.status(200).json({message: "Category updated successfully", data: result});
        });
    },

    deleteCategory: (req, res) => {
        const {id} = req.params;
        Category.delete (id, (err, result) => {
            if(err){
                return res.status(500).json({message: "Database error", error: err});
            }
            if(result.affectedRows === 0){
                return res.status(404).json({message: "Category not found"});
            }
            res.status(200).json({message: "Category deleted successfully", data: result});
        });
    }
}

module.exports = categoryController;