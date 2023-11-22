//4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.Posteriormente, cree tres instancias de este objeto y guárdalas en un array.Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto{
    constructor(codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    get codigo(){
        return this.codigo;
    }
    set nueCodigo(nuevoCodigo){
        this.codigo = nuevoCodigo;

    }

    get nombre(){
        return this.nombre;
    }
    set nueNombre(nuevoNombre){
        this.nombre = nuevoNombre;

    }


    get precio(){
        return this.precio;
    }
    set nuePrecio(nuevoPrecio){
        this.precio = nuevoPrecio;

    }

    //metodo
    imprimirDatos(){
        document.write(`<ul>
    <li>Código: ${this.codigo} </li>
    <li>Nombre: ${this.nombre} </li>
    <li>Precio: ${this.precio} </li>
    </ul>`)
    }
}

const producto1 = new Producto(100201,'Electrocardíografo',670000);
const producto2 = new Producto(300401,'Bomba de infusión',890000);
const producto3 = new Producto(500601,'Monitor multiparámetrico',1890000);


producto1.imprimirDatos();

producto2.imprimirDatos();

producto3.imprimirDatos();

console.log(producto1);

//NOTA: me sale un error, que no entiendo como solucionarlo(linea 5)