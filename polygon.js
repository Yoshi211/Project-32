class polygon{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': false
        }
        this.body = Bodies.circle(x,y,50,options);
        this.image = loadImage("circle.png");
        World.add(world,this.body);
    }
    display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        pop();
    }
}