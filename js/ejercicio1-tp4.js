//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
    marca: 'Nissan',
    modelo: 'Sentra',
    color: 'gris',
    encendido: function (){
        document.write(`<p>El auto se encuentra encendido.</p>`);
    },

    apagado: function (){
        document.write(`<p>El auto se encuentra apagado.</p>`);
    }
}

auto.encendido();
auto.apagado();