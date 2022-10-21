class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public run(): void {
        console.log('Comienza a correr...')
    }
}



class Dog extends Animal {
    constructor(name:string) {
        super(name)
    }

    public makeSound(): void {
        console.log('wuff wuff')
    }
   }


   class Cat extends Dog {
    constructor(name:string) {
        super(name)
    }

    public makeSound(): void {
        console.log('meow meow')
    }

    public washUp(): void {
        console.log('El gato se limpia con la lengua')
    }
   }
   
   let bulma: Cat = new Cat('Bulma');
   bulma.makeSound(); // -> meow meow
   bulma.washUp();
   let vegeta: Dog = new Dog('Vegeta');
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

class Celular {
    private marca: string;
    private modelo: string;
    private fechaDeFabricacion: number;

    constructor(marca: string, modelo: string, fechaFab: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.fechaDeFabricacion = fechaFab;
    }

    encender(): void {
        console.log('Encendiendo...');
    }

    apagar(): void {
        console.log('Apagando...');
    }
}

class Smarthphone extends Celular {
    constructor(marca: string, modelo: string, fechaDeFabricacion: number, procesador?: string) {
        super(marca, modelo, fechaDeFabricacion)
    }

    usarGoogle(): void{
        console.log('Abrir nueva pestana')
    }

    tomarFoto(): void {
        console.log('Foto guardada en la galeria')
    }
}

let SamsungA22: Smarthphone = new Smarthphone('Samsung','A22',2020,'Snapdragon');
SamsungA22.usarGoogle();
SamsungA22.tomarFoto();