class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImage = loadImage("./assets/CANON.png");
    this.baseImage = loadImage("./assets/cannon_base.png");
  }

  display() {
   
    if(keyIsDown(39) && this.angle < 0.90){
      this.angle += 0.02;
    }
    if(keyIsDown(37) && this.angle > -1.45){
      this.angle -= 0.02;
    }

    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannonImage,0,0,this.width,this.height);
    pop();
    image(this.baseImage,70,20,200,200);
  }
}
