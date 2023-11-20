//3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho; 
    }

    calcularPerimetro(){
        return (2*this.alto) + (2*this.alto);

    }

    calcularArea(){
        return (this.alto*this.ancho);
    }

       
}

const rectangulo = new Rectangulo(20,20);

document.write(`<p>El perímetro del rectángulo es: ${rectangulo.calcularPerimetro()} </p>`);
document.write(`<p>El área del rectángulo es: ${rectangulo.calcularArea()} </p>`);