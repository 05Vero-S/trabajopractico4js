/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/ 

class Persona{
    constructor(nombre,edad,dni,sexo,peso,altura,anioNac){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNac= anioNac;
    }

    comprobarSexo(){
        if (this.sexo == 'H') {
            this.sexo = "hombre";
        } else {
            this.sexo = "mujer";
        }

    }
    
    generarDni(){
       
    }

    esMayorDeEdad() {
        let mayor = false;
        if (this.edad >= 18) {
            mayor = true;
        }
        return mayor;
    }

    mostrarDatos(){
        document.write(`<h2>Informacion de la persona: </h2>
        <ul>
        <li>Nombre: ${this.nombre} </li>  
        <li>Edad: ${this.edad} </li>
        <li>DNI: ${this.dni} </li>
        <li>Sexo: ${this.sexo} </li>
        <li>Peso: ${this.peso} </li>
        <li>Altura: ${this.altura} </li>
        <li>Año de nacimiento: ${this.anioNac} </li>
        </ul>`);
    }


}

const persona1= new Persona('Juan',27,39203254,'H',70,1.80,1994);
persona1.mostrarDatos();

//persona1.esMayorDeEdad();

//persona1.comprobarSexo();