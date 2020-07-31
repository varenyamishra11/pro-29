class Box{
    constructor(x, y, width, height) {
      
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body); 
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill (118,233,255);
       rect( 0, 0, this.width, this.height);
        pop();
      }
}