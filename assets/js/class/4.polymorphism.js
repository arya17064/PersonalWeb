class Animal {
    speak() {
      console.log("Please define either 'Duck' or 'Cat' to speak");
    }
  }
  
  class Duck extends Animal {
    speak() {
      console.log("Quack!");
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log("Miaw!");
    }
  }
  
  const donald = new Duck();
  donald.speak();
  
  const tom = new Cat();
  tom.speak();
  
  const hewan = new Animal();
  hewan.speak();