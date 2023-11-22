/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro{
    constructor(Isbn,titulo,autor,numeroPaginas){
        this.Isbn=Isbn;
        this.titulo=titulo;
        this.autor=autor;
        this.numeroPaginas=numeroPaginas;
    }

get Isbn(){
    return this.Isbn;
}

set nueIsbn(nuevoIsbn){
    this.Isbn = nuevoIsbn;
}

get titulo(){
    return this.titulo;
}

set nueTitulo(nuevoTitulo){
    this.titulo = nuevoTitulo;
}

get autor(){
    return this.autor;
}

set nueAutor(nuevoAutor){
    this.autor = nuevoAutor;
}

get numeroPaginas(){
    return this.numeroPaginas;
}

set nueNumeroPaginas(nuevoNumPaginas){
    this.numeroPaginas = nuevoNumPaginas;
}

//metodo
mostrarLibro(){
    document.write(`<p>El libro ${this.titulo} con ISBN ${this.Isbn} creado por el autor ${this.autor} tiene páginas ${this.numeroPaginas} </p>`);
}

}

//crear objetos

const libro1= new Libro ('Indias Blancas', 9234759400156,'Florencia Bonelli', 480);

libro1.mostrarLibro();

const libro2 = new Libro ('Cien años de soledad', 8123786903441,'Gabriel García Márquez', 496);

libro2.mostrarLibro();

//indicar cuál de los 2 objetos “libros” tiene más páginas

if(libro1.numeroPaginas>libro2.numeroPaginas){
    document.write(`El libro ${libro1.titulo} tiene más páginas`);
}else{
    document.write(`El libro ${libro2.titulo} tiene más páginas`);
}


//NOTA: Tengo el mismo error que en el ejercicio 4 del tp. 

