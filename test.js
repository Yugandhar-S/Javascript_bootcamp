/*In the world of prototypes: you don’t create blueprints or classes here, you just create the object.
You take some wood and hack together a chair. This chair, an actual object, can function fully as a chair and 
also serve as a prototype for future chairs. 
In the world of prototypes, you build a chair and simply create “clones” of it. 
If you want to build a rocking chair, all you have to do is pick a chair you’ve manufactured earlier, attach two rockers to it,
and voilà! You have a rocking chair. You didn’t really need a blueprint for that. 
Now you can just use this rocking chair for yourself, or perhaps use it as a prototype to create more rocking chairs.*/

let chair = {
  type: "chair",
  typeOf: function () {
    console.log(`I am ${this.type}`);
  },
};

chair.typeOf();

let chair1 = Object.create(chair);
let chair2 = Object.create(chair);

chair1.typeOf();
chair2.typeOf();

let recliner = Object.create(chair);
recliner.type = "Recliner";
recliner.typeOf();

//Second Example : Animal hierarchy

let generalAnimal = {
  name: "Animal",
  gender: "Female",
  makeSound: function () {
    console.log(
      `I am an ${this.name}, My gender is ${this.gender} and I make ${this.sound} sound`
    );
  },
};

generalAnimal.makeSound();

let animal1 = Object.create(generalAnimal);
animal1.name = "Cat";
animal1.sound = "Meooowww";
animal1.makeSound();
animal1.description = function () {
  console.log(
    `I am ${this.name}, I am a ${animal1.name} and I make ${this.sound} sound`
  );
};

let animal2 = Object.create(generalAnimal);
animal2.name = "Dog";
animal2.sound = ` "Bhaawwuuu" `;
animal2.makeSound();

let emily = Object.create(animal1);
emily.name = "Emily";
emily.sound = `Meeaauuuu`;
emily.description();

let jasper = Object.create(animal1);
jasper.name = "Jasper";
jasper.sound = "Prrrrr....";

jasper.description();
