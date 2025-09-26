const express = require('express');
require('dotenv').config();

const app = express();

const userRoutes = require('./routers/userRoutes');
const itemRoutes = require('./routers/itemRoutes');
const supplierRoutes = require('./routers/supplierRoutes');
const categoryRoutes = require('./routers/categoryRoutes');
const customerRoutes = require('./routers/customerRoutes');

app.use(express.json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/items', itemRoutes);
app.use('/api/v1/suppliers', supplierRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/customers', customerRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
}); 