class createSnow{
    constructor(x,y){
        var options = {
            friction: 0.01,
            restitution:0.5           
        }
        this.image = loadImage("unnamed.png");
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rain);
    }

    showSnow(){
        imageMode(CENTER);
        image(this.image,random(0,400),random(0,400),300,300);
    }
}