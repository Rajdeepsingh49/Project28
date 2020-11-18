class Mango{
    constructor(x,y,r){
        var ops={
            'restitution':0.5,
            'friction':0.3,
            'density':1.0,
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,r,ops);
        this.image = loadImage("sprites/mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        ellipseMode(CENTER);
	    image(this.image, 0,0,this.r*2, this.r*2)
        pop();
    }
}