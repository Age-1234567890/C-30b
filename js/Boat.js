class Boat {

  constructor(x, y, width, height,boatPos) {

    this.image = loadImage("assets/boat.png");

    var options = {
      restitution:0.99,
      friction:1.0,
      density:1.0,
    };
    this.width = width;
    this.height = height;
    this.boatPos=boatPos
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    imageMode(CENTER);
    image(this.image,0, this.boatPos, this.width, this.height);
    pop();
  }
}


















