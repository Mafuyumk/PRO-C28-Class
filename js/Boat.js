class Boat {
    constructor(x, y, width, height, boatPos, boatAnimation) {
    var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
    };
  
  
    this.width = width;
    this.height = height;
    this.boatPos = boatPos
    
    this.body = MBS.rectangle(x, y, width, height, options);
  
    this.image = loadImage("./assets/boat.png")
    
    MW.add(world, this.body);

    this.animation = boatAnimation;
    this.speed = 0.05;
    }

    animate() {
        this.speed +- 0.05 % 1.1;
    }
  
    display() {
    var pos = this.body.position;
    var index = floor(this.speed % this.animation.length);
  
    push();
    imageMode(CENTER);
    image(this.animation[index],pos.x,pos.y,this.width,this.height);
    pop();
  
    }
}