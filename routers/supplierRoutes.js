const SupplierController = require('../controllers/supplierController');
const express =require('express');
const router = express.Router();

router.post('/create', SupplierController.createSupplier);
router.get('/all', SupplierController.getAllSuppliers);
router.get('/find/:id', SupplierController.getSupplierById);
router.put('/update/:id', SupplierController.updateSupplier);
router.delete('/delete/:id', SupplierController.deleteSupplier);

module.exports = router;