const Contenedor = require('./main') // Importing Container class
const products = new Container('products.txt') // Create new instance of class Container

const express = require('express')
const app = express()

const server = app.listen(8080 , ()=> {
    console.log(`El servidor (HTTP) esta escuchando en el puerto ${server.address().port}`)
})


app.get('/productos', async (req, res) => {
    const allProducts = await products.getAll()
    res.send(allProducts)
})
app.get('/productoRandom', async (req, res) => {
    const product = await products.getRandom()
    res.send(product)
})

app.get('*', (req, res) => {
    res.send('<h3>ruta mal escrita</h3>')
})
server.on('Error', error => {
    console.error(`Error en el servidor. ${error}`)
})