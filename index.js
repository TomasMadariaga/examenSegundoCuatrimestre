var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        console.log('Comienza a correr...');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log('wuff wuff');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log('meow meow');
    };
    Cat.prototype.washUp = function () {
        console.log('El gato se limpia con la lengua');
    };
    return Cat;
}(Dog));
var bulma = new Cat('Bulma');
bulma.makeSound(); // -> meow meow
bulma.washUp();
var vegeta = new Dog('Vegeta');
vegeta.makeSound(); // -> wuff wuff
/*
Que es un objeto?
UN OBJETO ES ALGO REAL CON CARACTERISTICAS PROPIAS
 
Que es una clase? A que se llama metodo constructor?
UNA CLASE ES UN OBJETO A CREAR USANDO CUALIDADES Y METODOS PROPIAS DE DICHA CLASE. CONSTRUCTOR SERIA UNA PLANTILLA PARA CREAR LA CLASE

Que son los modificadores de acceso?
LOS MODIFICADORES DE ACCESO SON PALABRAS QUE DEFINEN SI SE PUEDE USAR O NO LAS VARIABLES DE LA CLASE

Que diferencia hay entre uno privado y uno protegido?
EN PRIVADO NO SE PUEDE ACCEDER SI NO ES DE SU MISMA CLASE Y EN PROTEGIDO LAS VARIABLES SE PUEDEN USAR EN SUBCLASES SOLAMENTE

Cuando se usa el this?
EL THIS SE PUEDE USAR PARA LLAMAR A LA VARIABLE INTERNA. POR EJ: THIS.NAME = THIS.VARIABLEDELCONSTRUCTOR

Cuando se usa el super?
EL SUPER SE USA CUANDO HEREDAS UNA CLASE Y TRAES SU CONSTRUCTOR

A que se llama sub-clase, o clase hija?
SUB CLASE O CLASE HIJA SE LE LLAMA A UNA CLASE QUE HEREDA VARIABLES Y/O METODOS DE OTRA CLASE

*/
var Celular = /** @class */ (function () {
    function Celular(marca, modelo, fechaFab) {
        this.marca = marca;
        this.modelo = modelo;
        this.fechaDeFabricacion = fechaFab;
    }
    Celular.prototype.encender = function () {
        console.log('Encendiendo...');
    };
    Celular.prototype.apagar = function () {
        console.log('Apagando...');
    };
    return Celular;
}());
var Smarthphone = /** @class */ (function (_super) {
    __extends(Smarthphone, _super);
    function Smarthphone(marca, modelo, fechaDeFabricacion, procesador) {
        return _super.call(this, marca, modelo, fechaDeFabricacion) || this;
    }
    Smarthphone.prototype.usarGoogle = function () {
        console.log('Abrir nueva pestana');
    };
    Smarthphone.prototype.tomarFoto = function () {
        console.log('Foto guardada en la galeria');
    };
    return Smarthphone;
}(Celular));
var SamsungA22 = new Smarthphone('Samsung', 'A22', 2020, 'Snapdragon');
SamsungA22.usarGoogle();
SamsungA22.tomarFoto();
