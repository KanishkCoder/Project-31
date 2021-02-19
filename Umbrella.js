class Umbrella{
    constructor(x,y,radius){
        var options={
            'isStatic':true
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius;
        this.image=loadImage("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image,pos.x,pos.y+70,300,300)
    }
}