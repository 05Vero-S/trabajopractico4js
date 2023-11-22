//8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona{
    constructor(nombre,edad,profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar(){
        document.write(`<p>Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.</p>`);
    }

    despedirse(){
        document.write(`<p>Un placer,hasta luego!</p>`);
    }
}

const persona1 = new Persona('Juan Perez', 28,'Abogado');
persona1.saludar();
persona1.despedirse();

const persona2 = new Persona('María Gonzalez',26,'Médica');
persona2.saludar();
persona2.despedirse();
