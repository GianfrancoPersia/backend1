const Contenedor = require('./main')

async function main(){
    const products = new Contenedor('products.txt')
    // Prueba metodo getAll()
    console.log('Mostramos todos los productos')
    let allProducts = await products.getAll()
    console.log(allProducts)
    // Prueba metodo getById()
    let idToSearch = 4
    console.log(`Mostramos por consola un producto con id ${idToSearch}`)
    let productById = await products.getById(idToSearch)
    console.log(productById)
    // Prueba metodo save()
    let newProduct1 = {"id":15, "name":"Yeezy Boost 350 V2", "price": 350, "src":"randomurl"} // Prueba con un producto que ya posee id
    await products.save(newProduct1)
    let newProduct2 = {"name":"Air Force 1 Low", "price": 97, "src":"randomurl"} // Prueba con un producto sin id
    await products.save(newProduct2)
    // Prueba deleteById()
    console.log('Prueba de eliminacion')
    let productIdToDelete = 14
    await products.deleteById(productIdToDelete)
    allProducts = await products.getAll() // Actualizamos la variable allProducts para ver si se ha eliminado el elemento
    console.log(allProducts)
    // Prueba deleteAll()
    await products.deleteAll()
}
main()
