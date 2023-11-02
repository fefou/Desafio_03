const express = require('express')
const app = express()
const port = 8080
const fs = require('fs')
const productosJSON = require('./productos.json')



app.get('/productos', (req, res) => {
    res.json(productosJSON);
});


app.get('/productos/:id', (req, res) => {

    let id = req.params.id
    resultado = productosJSON.find(prod => prod.id == id)

    if (resultado){
        fs.readFile('productos.json', 'utf8', (err, data) => {

            const productos = JSON.parse(data);
            res.status(200).json({ resultado });

        });
    }else{
        res.status(404).json({ error: 'Producto no encontrado' })
    }
});

app.listen(port, () => {
    console.log(`Server funcionando con Express en el puerto ${port}`);
});


