class Usuario{
    constructor(nombre,apellido,libros=[],mascotas=[]){
        this.nombre=nombre;  
        this.apellido=apellido;  
        this.libros=libros;  
        this.mascotas=mascotas;  
    }

    getFullName(){
        return(`${this.nombre} ${this.apellido}`)
    }

    addMascota(nombre){
        this.mascotas.push(nombre)
        return this.mascotas
    }

    countMascotas(){
        return this.mascotas.length
    }

    addLibro(nombre,autor){
        this.libros.push({nombre : nombre, autor: autor})
        return this.libros
    }

    getBookNames(){
        let nombresLibros = [];
        this.libros.forEach(libros => nombresLibros.push(libros.nombre));
        return nombresLibros
    }
}

const usuariox = new Usuario ('Juan', 'Gomez')

console.log('Usuario creado')
console.log(usuariox)

usuariox.addMascota('Perro')
usuariox.addMascota('Gato')
console.log(usuariox)
console.log(`Cantidad de mascotas : ${usuariox.countPets()}`)

usuariox.addBook('Cien años de soledad, de Gabriel García Márquez')
usuariox.addBook('El señor de los anillos (Trilogía), de J. R. R. Tolkien')

console.log(usuariox)
console.log(`Los libros agregados son: ${usuariox.getBookNames()}`)