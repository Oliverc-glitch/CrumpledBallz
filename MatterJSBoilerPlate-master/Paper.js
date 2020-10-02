class Paper{
    constructor(x, y, radius){
        var options ={
            restitution:0.3,
            isStatic:false,
            friction: 0.5,
            density:5.0
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.x = x;
        this.y = y;
        this.radius = radius;     
        //this.image = loadImage("./paper.png");   

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(2);
        fill(255,0,255);
        pop();
    }
}