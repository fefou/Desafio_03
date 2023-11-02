const express = require('express');
const ProductManager = require('./01-prueba')
ProductManager
const app = express();
const PORT = 8080; 

const server = app.listen(PORT, () => {
    console.log(`Server en linea en puerto ${PORT}`)
})


app.get('/', (req, res) => {
    res.send("Server con expresss JS")
    res.status(200).send('OK');
})

app.get('/products/:id', (req, res) => {

    let resultado = x

    if (req.query.limit) {
        resultado = resultado.slice(0, req.query.limit)
    }

    let id = req.params.id

    res.setHeader('Content-Type', 'text/plain')
    res.json({products:products.json})
})

