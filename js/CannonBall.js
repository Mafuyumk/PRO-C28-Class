class CannonBall{
    constructor(x,y){
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
            isStatic: true
        };

        this.r = 20;

        this.body = MBS.circle(x,y,this.r,options);
        MW.add(world,this.body);

        this.image = loadImage("./assets/cannonball.png")
        this.trajectory = [];
    }

    shoot(){
        var v = p5.Vector.fromAngle(cannon.angle,20);
        MB.setStatic(this.body,false)
        MB.setVelocity(this.body, {x: v.x,y: v.y})
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0,2*this.r,2*this.r)
        pop();

        if(this.body.velocity.x > 0 && pos.x > 300){
            var position = [pos.x, pos.y];
            this.trajectory.push(position);
        }

        for(var i = 0; i < this.trajectory.length; i++){
            image(this.image, this.trajectory[i][0], this.trajectory[i][1],5,5);
        }

    }

}