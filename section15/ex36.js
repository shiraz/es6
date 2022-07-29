/*
Now that you have a monster created, create a subclass of the Monster called Snake.
Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created. 
    1. The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
    2. The instance of Snake that is passed in should have their health deducated by 10.
*/

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }

  bite(snake) {
    snake.health = snake.health - 10;
  }
}
