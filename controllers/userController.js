const User = require('../model/userModel')

const userController = {
    createUser: (req, res) => {
        const {name, email, age} = req.body;

        if(!name || !email || !age){
            return res.status(400).json({message: "All fields are required"});
        }

        User.create({name, email, age}, (err, result) => {
            res.status(201).json({message: "User created successfully", data: result});
        });
    },

    getAllUsers: (req, res) => {
        User.getAll((err, result) => {
            if(err){
                return res.status(500).json({message: "Database error", error:err});
            }
            res.status(200).json({data:result});
        });
    },

    updateUser: (req, res) => {
        const {id} = req.params;
        const {name, email, age} = req.body;

        User.update(id, {name, email, age},() => {
            if(err){
                return res.status(500).json({message: "Database error", error:err});
            }
            res.status(200).json({message:"User updated seccessfully", data:result});
        });
    },

    deleteUser: (req, res) => {
        const {id} = req.params;
        User.delete(id, (err, result) => {
            if(err){
                return res.status(500).json({message: "Database error", error:err});
            }
            if(result.affectedRows === 0){
                return res.status(404).json({message: "User not found"});
            }
            res.status(200).json({message: "User deleted successfully", data:result});
        });
    }
}

module.exports = userController;  