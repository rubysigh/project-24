class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1.0
      }
      this.radius= radius;
     this.body = Matter.Bodies.circle(x, y, radius);
     World.add(world,this.body);
      
     
    }
    display(){
      strokeWeight(2);
      stroke("black");
     fill("blue");
      ellipse(this.body.position.x, this.body.position.y, this.radius);
    
    }
  };