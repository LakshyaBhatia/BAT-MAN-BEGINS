class WaterDrops {

    constructor(x,y){
        
    var options = {
        friction : 0.001,
        restitution : 0.1
    }
     this.rain = Bodies.circle(x,y,5,options);
     this.radius = 3;
     World.add(world,this.rain);
    }
    update_Y_Position(){     
        if(this.rain.position.y > 800){

            Matter.Body.setPosition(this.rain, {x:random(0,800), y:random(0,800)})
        }
    }

    display(){
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}