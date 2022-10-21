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
   let vegeta: Dog = new Dog('Vegeta');
   vegeta.makeSound(); // -> wuff wuff