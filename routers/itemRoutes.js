const ItemController = require(`../controllers/itemController`);
const express =require('express');
const router = express.Router();

router.post('/create', ItemController.createItem);
router.get('/all', ItemController.getAllItems);
router.get('/find/:id', ItemController.getItemById);
router.put('/update/:id', ItemController.updateItem);
router.delete('/delete/:id', ItemController.deleteItem);

module.exports = router;