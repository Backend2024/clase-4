const express = require('express');
const ProductManager = require('./ProductManager');
const app = express();
const productManager = new ProductManager('./data/products.json');

// Endpoint para obtener todos los productos
app.get('/products', async (req, res) => {
    try {
        const limit = req.query.limit;
        let products = await productManager.getProducts();

        if (limit) {
            products = products.slice(0, Number(limit));
        }

        res.json(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Endpoint para obtener un producto por su ID
app.get('/products/:pid', async (req, res) => {
    try {
        const product = await productManager.getProductById(Number(req.params.pid));
        res.json(product);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

// Iniciar el servidor en el puerto 8080
app.listen(8080, () => {
    console.log("Servidor escuchando en el puerto 8080");
});